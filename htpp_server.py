#!/home/syed/anaconda3/bin/python3
import pandas as pd
from pandas import DataFrame
from pandas.io.json import json_normalize
import numpy as np
from sklearn.neighbors import NearestNeighbors
import sys
from pprint import pprint

import socket
from http.server import BaseHTTPRequestHandler, HTTPServer
import time

from urllib.parse import urlparse


hostName = ""
hostPort = 80

class MyServer(BaseHTTPRequestHandler):

	def find_nearest_neighbors(self, pid):
		print(type(pid))
		pid = int(pid)
		df_final = pd.read_csv('data_rent_predicted.csv', index_col='index')

		df_final = df_final[['Latitude', 'Longitude', 'MinRent',
       'MaxRent', 'NumBedsMin', 'NumBedsMax', 'NumBathsMin', 'NumBathsMax',
       'UnitMinSqFt', 'UnitMaxSqFt', 'Rooms-High Speed Internet Access',
       'Rooms-Dishwasher', 'Building-Laundry Facilities', 'Rooms-Carpet',
       'Rooms-Microwave', 'Rooms-Tub/Shower', 'Rooms-Air Conditioning',
       'Rooms-Refrigerator', 'Rooms-Hardwood Floors',
       'Building-Property Manager on Site' ]]


		df_final_ints = df_final[list(set(df_final.columns.values).difference(['BuildingRatingDesc', 'BuildingClassDesc', 'StreetAddress',
       'Quadrant', 'City', 'State', 'PostCode',]))]

		train = df_final_ints.fillna(0)

		nbrs = NearestNeighbors(n_neighbors=6, algorithm='ball_tree').fit(train)
		knn = nbrs.kneighbors(train.iloc[pid].values.reshape((1, -1)))
		indices = knn[1][0][:]

		data = train.loc[indices].T.to_json()

		return data 

	#	GET is for clients geting the predi
	def do_GET(self):
		self.send_response(200)
		#self.wfile.write(bytes("<p>You accessed path: %s</p>" % self.path, "utf-8"))
		#self.wfile.write(bytes("{id:1, var:2, versdf:3224}","utf-8"))
		query = urlparse(self.path).query
		print([qc.split("=") for qc in query.split("&")])
		query_components = dict(qc.split("=") for qc in query.split("&"))

		print('data recived:', query_components)
		data = self.find_nearest_neighbors(int(query_components['id']))
		self.wfile.write(bytes(data,"utf-8"))
	
	
	# #	POST is for submitting data.
	# def do_POST(self):

	# 	print( "incomming http: ", self.path )

	# 	content_length = int(self.headers['Content-Length']) # <--- Gets the size of data
	# 	post_data = self.rfile.read(content_length) # <--- Gets the data itself
	# 	self.send_response(200)

	# 	client.close()

		#import pdb; pdb.set_trace()


myServer = HTTPServer((hostName, hostPort), MyServer)
print(time.asctime(), "Server Starts - %s:%s" % (hostName, hostPort))

try:
	myServer.serve_forever()
except KeyboardInterrupt:
	pass

myServer.server_close()
print(time.asctime(), "Server Stops - %s:%s" % (hostName, hostPort))
