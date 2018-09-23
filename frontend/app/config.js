//TODO: this should be implemented server-side later
export var centerMap = [];
centerMap[528] = "Albany";
centerMap[506] = "Ann Arbor";
centerMap[508] = "Atlanta";
centerMap[512] = "Baltimore";
centerMap[516] = "Bay Pines";
centerMap[523] = "Boston";
centerMap[526] = "Bronx";
centerMap[630] = "Brooklyn";
centerMap[541] = "Cleveland";
centerMap[549] = "Dallas";
centerMap[552] = "Dayton";
centerMap[553] = "Detroit";
centerMap[558] = "Durham";
centerMap[561] = "East Orange";
centerMap[578] = "Hines";
centerMap[580] = "Houston";
centerMap[583] = "Indianapolis";
centerMap[586] = "Jackson";
centerMap[589] = "Kansas City";
centerMap[600] = "Long Beach";
centerMap[691] = "Los Angeles";
centerMap[614] = "Memphis";
centerMap[546] = "Miami";
centerMap[695] = "Milwaukee";
centerMap[618] = "Minneapolis";
centerMap[621] = "Mountain Home, TN";
centerMap[632] = "Northport";
centerMap[635] = "Oklahoma City";
centerMap[675] = "Orlando";
centerMap[642] = "Philadelphia";
centerMap[646] = "Pittsburgh";
centerMap[652] = "Richmond";
centerMap[671] = "San Antonio";
centerMap[672] = "San Juan";
centerMap[663] = "Seattle";
centerMap[667] = "Shreveport";
centerMap[657] = "St. Louis";
centerMap[673] = "Tampa";
centerMap[688] = "Washington";
centerMap[548] = "West Palm Beach";

export var qmPassPercent = [];
qmPassPercent['QualityMeasure1'] = 90;
qmPassPercent['QualityMeasure2'] = 90;
qmPassPercent['QualityMeasure3'] = 95;
qmPassPercent['QualityMeasure4'] = 80;
qmPassPercent['QualityMeasure5'] = 75;
qmPassPercent['QualityMeasure6'] = 5;
qmPassPercent['QualityMeasure7'] = 100;
qmPassPercent['QualityMeasure8'] = 95;
qmPassPercent['QualityMeasure9'] = 90;
qmPassPercent['QualityMeasure10'] = 66;
qmPassPercent['QualityMeasure11'] = 90;
qmPassPercent['QualityMeasure12'] = 66;
qmPassPercent['QualityMeasure13'] = 90;
qmPassPercent['QualityMeasure14'] = 95;
qmPassPercent['QualityMeasure15'] = 90;
qmPassPercent['QualityMeasure15_color'] = 90;
qmPassPercent['QualityMeasure16'] = 50;
qmPassPercent['QualityMeasure17A'] = 100;
qmPassPercent['QualityMeasure17B'] = 90;
qmPassPercent['QualityMeasure18'] = 70;
qmPassPercent['QualityMeasure19'] = 75;
qmPassPercent['QualityMeasure24'] = 90;

var ProstateQMPassLimit={};
ProstateQMPassLimit['QualityMeasure1'] = { astro:90, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure2'] = { astro:90, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure3'] = { astro:95, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure4'] = { astro:80, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure5'] = { astro:null, NROPhigh:75, NROPlow:50};
ProstateQMPassLimit['QualityMeasure6'] = { astro:null, NROPhigh:5, NROPlow:1};
ProstateQMPassLimit['QualityMeasure7'] = { astro:100, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure8'] = { astro:95, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure9'] = { astro:null, NROPhigh:90, NROPlow:75};
ProstateQMPassLimit['QualityMeasure10'] = { astro:null, NROPhigh:66, NROPlow:50};
ProstateQMPassLimit['QualityMeasure11'] = { astro:90, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure12'] = { astro:null, NROPhigh:66, NROPlow:50};
ProstateQMPassLimit['QualityMeasure13'] = { astro:null, NROPhigh:90, NROPlow:75};
ProstateQMPassLimit['QualityMeasure14'] = { astro:95, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure15'] = { astro:null, NROPhigh:75, NROPlow:90};
ProstateQMPassLimit['QualityMeasure16'] = { astro:null, NROPhigh:50, NROPlow:25};
ProstateQMPassLimit['QualityMeasure17A'] = { astro:100, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure17B'] = { astro:90, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure18'] = { astro:70, NROPhigh:null, NROPlow:null};
ProstateQMPassLimit['QualityMeasure19'] = { astro:null, NROPhigh:75, NROPlow:50};
ProstateQMPassLimit['QualityMeasure20'] = { astro:null, NROPhigh:75, NROPlow:50};
ProstateQMPassLimit['QualityMeasure21'] = { astro:null, NROPhigh:75, NROPlow:50};
ProstateQMPassLimit['QualityMeasure22'] = { astro:null, NROPhigh:75, NROPlow:50};
ProstateQMPassLimit['QualityMeasure23'] = { astro:null, NROPhigh:75, NROPlow:50};
ProstateQMPassLimit['QualityMeasure24'] = { astro:null, NROPhigh:90, NROPlow:75};


var LungQMPassLimit={};
LungQMPassLimit['QualityMeasure1'] = { astro:95, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure2'] = { astro:95, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure3'] = { astro:80, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure4'] = { astro:null, NROPhigh:50, NROPlow:25};
LungQMPassLimit['QualityMeasure5'] = { astro:90, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure6'] = { astro:null, NROPhigh:90, NROPlow:75};
LungQMPassLimit['QualityMeasure7'] = { astro:90, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure8A'] = { astro:90, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure8B'] = { astro:80, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure9'] = { astro:null, NROPhigh:1, NROPlow:5};
LungQMPassLimit['QualityMeasure10'] = { astro:90, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure11'] = { astro:null, NROPhigh:95, NROPlow:95};
LungQMPassLimit['QualityMeasure12'] = { astro:null, NROPhigh:95, NROPlow:95};
LungQMPassLimit['QualityMeasure13'] = { astro:null, NROPhigh:95, NROPlow:95};
LungQMPassLimit['QualityMeasure14'] = { astro:90, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure15'] = { astro:75, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure16'] = { astro:90, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure17'] = { astro:90, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure18'] = { astro:70, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure19'] = { astro:null, NROPhigh:95, NROPlow:95};
LungQMPassLimit['QualityMeasure20'] = { astro:null, NROPhigh:95, NROPlow:95};
LungQMPassLimit['QualityMeasure21A'] = { astro:70, NROPhigh:null, NROPlow:null};
LungQMPassLimit['QualityMeasure21B'] = { astro:null, NROPhigh:95, NROPlow:95};
LungQMPassLimit['QualityMeasure22'] = { astro:null, NROPhigh:75, NROPlow:50};
LungQMPassLimit['QualityMeasure23'] = { astro:null, NROPhigh:50, NROPlow:25};
LungQMPassLimit['QualityMeasure24'] = { astro:null, NROPhigh:50, NROPlow:10};
LungQMPassLimit['QualityMeasure25'] = { astro:20, NROPhigh:null, NROPlow:null};// check again
LungQMPassLimit['QualityMeasure26'] = { astro:25, NROPhigh:null, NROPlow:null};// check again
LungQMPassLimit['QualityMeasure27'] = { astro:null, NROPhigh:90, NROPlow:75};

//var 'workup' : ['QualityMeasure1', 'QualityMeasure2','QualityMeasure3'];

/*
var qmCategories = {};
qmCategories.Workup = ['QualityMeasure1', 'QualityMeasure2','QualityMeasure3'];
qmCategories.di = ['QualityMeasure4','QualityMeasure7','QualityMeasure9','QualityMeasure14','QualityMeasure15'];
qmCategories.Planning = ['QualityMeasure8','QualityMeasure11','QualityMeasure13'];
qmCategories.Followup = ['QualityMeasure18','QualityMeasure17A','QualityMeasure17B'];
qmCategories.Aspirational = ['QualityMeasure5','QualityMeasure16','QualityMeasure19','QualityMeasure24'];
qmCategories.Surveillance = ['QualityMeasure12','QualityMeasure10','QualityMeasure6'];
*/

export var qmCategories = {};
qmCategories.prostate = {}
qmCategories.prostate.workup = {
    types: ['QualityMeasure1', 'QualityMeasure2', 'QualityMeasure3'],
    canvasDim: { height: 250, width: 120 },
    chartTitle: "Workup",
    yAxisLabel: "Passing %"
};
qmCategories.prostate.di = {
    types: ['QualityMeasure4', 'QualityMeasure7', 'QualityMeasure9', 'QualityMeasure14', 'QualityMeasure15'],
    canvasDim: { height: 250, width: 150 },
    chartTitle: "D&I",
    yAxisLabel: ""
};
qmCategories.prostate.Planning = {
    types: ['QualityMeasure8', 'QualityMeasure11', 'QualityMeasure13'],
    canvasDim: { height: 250, width: 120 },
    chartTitle: "Planning",
    yAxisLabel: ""
};
qmCategories.prostate.Followup = {
    types: ['QualityMeasure18', 'QualityMeasure17A', 'QualityMeasure17B'],
    canvasDim: { height: 250, width: 120 },
    chartTitle: "Followup",
    yAxisLabel: ""
};
qmCategories.prostate.Aspirational = {
    types: ['QualityMeasure5', 'QualityMeasure16', 'QualityMeasure19', 'QualityMeasure24'],
    canvasDim: { height: 250, width: 150 },
    chartTitle: "Aspirational",
    yAxisLabel: ""
};
qmCategories.prostate.Surveillance = {
    types: ['QualityMeasure12', 'QualityMeasure10', 'QualityMeasure6'],
    canvasDim: { height: 250, width: 120 },
    chartTitle: "Surveillance",
    yAxisLabel: ""
};


qmCategories.lung = {}
qmCategories.lung.workup = {
    types: ['QualityMeasure1', 'QualityMeasure2', 'QualityMeasure3', 'QualityMeasure5', 'QualityMeasure7', 'QualityMeasure8A', 'QualityMeasure8B', 'QualityMeasure10'],
    canvasDim: { height: 250, width: 150 },
    chartTitle: "Workup",
    yAxisLabel: "Passing %" 
};
qmCategories.lung.di = {
    types: ['QualityMeasure6', 'QualityMeasure11', 'QualityMeasure13', 'QualityMeasure18', 'QualityMeasure19', 'QualityMeasure20', 'QualityMeasure21A', 'QualityMeasure21B', 'QualityMeasure27'],
    canvasDim: { height: 250, width: 180 },
    chartTitle: "D&I",
    yAxisLabel: ""

}
qmCategories.lung.planning = {
    types: ['QualityMeasure12', 'QualityMeasure14'],
    canvasDim: { height: 250, width: 100 },
    chartTitle: "Planning",
    yAxisLabel: ""

};
qmCategories.lung.followup = {
    types: ['QualityMeasure24'],
    canvasDim: { height: 250, width: 50 },
    chartTitle: "Followup",
    yAxisLabel: ""

};
qmCategories.lung.aspirational = {
    types: ['QualityMeasure15', 'QualityMeasure16', 'QualityMeasure17', 'QualityMeasure22', 'QualityMeasure23'],
    canvasDim: { height: 250, width: 130 },
    chartTitle: "Aspirational",
    yAxisLabel: ""

};
qmCategories.lung.surveillance = {
    types: ['QualityMeasure4', 'QualityMeasure9'],
    canvasDim: { height: 250, width: 100 },
    chartTitle: "Surveillance",
    yAxisLabel: ""
};




export const measures = {
    pass: "Pass",
    fail: "Fail",
    excluded: "Excluded"
}

export const dvhMeasures = {
    pass: ["Green","Yellow"],
    fail: ["Red"],
    excluded: [""]
}