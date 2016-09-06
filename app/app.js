import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './service/restService';
import Grid from './components/grid/grid';
import './res/scss/main.scss';
import remove from 'lodash/remove';


import Stages from './buisness/stages/stages' ;

const configuration = {
	//columnsOrder: [],
	columns : {
		status: {
			label: "Status",
			field: "status.decode",
			view: "text"
		},

		name: {
			label: "Name",
			field: "name",
			view: "text"
		},

		type: {
			label: "Type",
			field: "type",
			view: "text",
			filter:{
				field: "customReferenceData.allProjectTypes",
				view: "checkBoxListFilter"
			}
		},

		stages: {
			label: "Stages",
			field: "stages",
			view: Stages,
		},

		completionDate: {
			label: "Completion Date",
			field: "currentEstimatedDate",
			view: "date"
		}

		// nameAndLocation: {
		// 	label: "Name And Location",
		// 	fields: ["name", "location"],
		// 	view: "nameAndLocation"
		// },

		// type:{
		// 	label: "Type"
		// 	field: "type"
		// },
		// stages:{
		// 	label: "Stages"
		// 	field: "stages"
		// },
		// completionDate:{},
		// action:{}
	}
};

var onCriterionChange = function(columnId, criterion){
	console.log(columnId);
	console.log(criterion);
	remove(filters.filterCriterions.filterCriterions, function(criterion) {
	  return criterion.fieldName == columnId;
	});
	filters.filterCriterions.filterCriterions.push(criterion);
	fetchProjects();
}

const render = function(projects, configuration, filters){
	return ReactDOM.render(
		<Grid data={projects} config={configuration} filters={filters} onCriterionChange={onCriterionChange}/>,
		document.getElementById('grid')
	);
};

var predefineFilters = {
	"filterCriterions":[
		// {
		// 	"fieldName":"status",
		// 	"type":"string",
		// 	"operator":"in",
		// 	"logicalRelation":null,
		// 	"criterionValue":null,
		// 	"criterionValues":[
		// 		{
		// 			"@type":".StringFilterCriterionValue",
		// 			"value":"AIN ERROR"
		// 		},
		// 		{
		// 			"@type":".StringFilterCriterionValue",
		// 			"value":"CIN PROGRESS"
		// 		},
		// 		{
		// 			"@type":".StringFilterCriterionValue",
		// 			"value":"BNOT STARTED"
		// 		},{
		// 			"@type":".StringFilterCriterionValue",
		// 			"value":"CDRELEASE IN PROGRESS"
		// 		},{
		// 			"@type":".StringFilterCriterionValue",
		// 			"value":"ECANCEL IN PROGRESS"
		// 		}
		// 	]
		// }
	],
	"sortCriterions":[{"fieldName":"name","direction":"ASCENDING"}],"pagingCriterion":{"pageStart":0,"pageSize":25},"options":[],"results":null,"dynamicAttributes":["PROJECT_NAME","ProjDtls.Addr","ProjDtls.City","ProjDtls.St"]};
var projects = {};
var filters = {
	data: {},
	filterCriterions: predefineFilters
};


var fetchProjects = function(){
	restService.post('/dop/services/project/fetchProjects', filters.filterCriterions).then(function(fetchProjects){
		projects = fetchProjects.results
		render(projects, configuration, filters);
		console.log("firstRender");
		//setTimeout(function(){ 
			restService.get('/dop/services/ReferenceData/CustomReferenceData').then(function(customReferenceData){
				filters.data["customReferenceData"] = customReferenceData;
				render(projects, configuration, filters);
				console.log("secondRender");
			});
		//}, 3000);
	});
};

render(projects, configuration, filters);
fetchProjects();