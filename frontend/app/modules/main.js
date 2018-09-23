import { Stitch, UserApiKeyCredential, UserPasswordCredential, RemoteMongoClient } from 'mongodb-stitch-browser-sdk'
import { map, invalidateSize, marker, Icon, LeafIcon } from "leaflet"
import { basemapLayer, featureLayer, tiledMapLayer, post, dynamicMapLayer } from 'esri-leaflet';
import { leafletGeotiff, plotty } from "leaflet-geotiff"
import {heatLayer} from "./heat"
import _ from "lodash"

import marker1 from 'leaflet/dist/images/marker-icon.png';
import marker2 from 'leaflet/dist/images/marker-icon-1.png';
import marker3 from 'leaflet/dist/images/marker-icon-3.png';
import marker2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import heat from './heat';

window.recom = false;

export default function main() {

 

  const ourMap = map('map').setView([38.90, -77.03],14);

  // add basemap
  basemapLayer('Gray').addTo(ourMap);

  // // add layer
  // featureLayer({
  //   url: 'https://services.arcgis.com/uCXeTVveQzP4IIcx/arcgis/rest/services/gisday/FeatureServer/0/'
  // }).addTo(ourMap);
  ourMap.invalidateSize();


  function serverAuth(callback) {
    post('https://www.arcgis.com/sharing/rest/generateToken', {
      username: 'adel.shahrezaei_Timmons_Group',
      password: 'mamal65serenti',
      f: 'json',
      expiration: 86400,
      client: 'referer',
      referer: window.location.origin
    }, callback);
  }

  serverAuth(function (error, response) {

    const dl = dynamicMapLayer({
      url: 'https://landscape1.arcgis.com/arcgis/rest/services/USA_Flood_Risk/MapServer/'
      , token: response.token
    }).addTo(ourMap);



    dl.on('authenticationrequired', function (e) {
      serverAuth(function (error, response) {
        e.authenticate(response.token);
      });
    });
  });


  // Housing 

  loadHousingData(ourMap)



}


function loadHousingData(ourMap) {
  let mm = {};


  //define icons
  var LeafIcon = Icon.extend({
    options: {
      shadowUrl: 'marker-shadow.png',
      iconSize: [32, 32],
      shadowSize: [32, 32],
      iconAnchor: [22, 22],
      shadowAnchor: [20, 22],
      popupAnchor: [-3, -30]
    }
  });

  var greenIcon = new LeafIcon({ iconUrl: 'blue-50.png' }),
    redIcon = new LeafIcon({ iconUrl: 'marker-icon-1.png' }),
    orangeIcon = new LeafIcon({ iconUrl: 'orange-50.png' });

  const client = Stitch.initializeDefaultAppClient('stitchapp-xvhoa');

  const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('RentalDB');

  function getRecomPy(id){
    document.getElementById("detail").innerHTML=""
    fetch('http://localhost:80/?id='+id)
      .then((res)=>{
        res.json().then((js)=>{
          _.each(js, (r)=> {
            mm = marker([r.Latitude, r.Longitude], { icon: redIcon}).addTo(ourMap);
            mm.bindPopup(`Min Rent:${Math.round(r.MinRent)}</br>Max Rent:${Math.round(r.MaxRent)}</br>
            <button onclick="getRecomPy(${r.index})">Recom Method 1</button>
            <button onclick="getRecomR(${r.Latitude},${r.Longitude})">Recom Method 2</button>`);
          })
        })
        
        
      })
  }
  
  window.getRecomPy = getRecomPy;

  client.auth.loginWithCredential(new UserApiKeyCredential("JvDZaPAXqGzVNVPXf7MIKcmhsVENRzaxhT8HL8eLh5UoPOTsd22QNSLQcpnTX4zg"))
    .then(user => {

       db.collection('Housing').find({}).asArray()
        .then(docs => {
          docs.forEach(doc => {


            mm = marker([doc.Latitude, doc.Longitude], { icon: doc.PredFlag == 1 ? orangeIcon : greenIcon }).addTo(ourMap);
            mm.bindPopup(`Min Rent:${Math.round(doc.MinRent)}</br>Max Rent:${Math.round(doc.MaxRent)}</br>
            <button onclick="getRecomPy(${doc.index})">Recom Method 1</button>
            <button onclick="getRecomR(${doc.Latitude},${doc.Longitude})">Recom Method 2</button>`);

          })

        })
        
        db.collection('Crimes').find({}).asArray()
        .then(docs => {
          
          const crimes = docs.map(d => [d.field3, d.field2, d.apple*10])
          
          heatLayer(crimes, {radius: 30}).addTo(ourMap);
        })


      }
    ).catch(err => {
      console.error(err)
    });

}

function plotHousingData(data) {

}