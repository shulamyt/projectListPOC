import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './service/restService';
import Grid from './components/grid/grid';
import './res/scss/main.scss';

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

const render = function(projects, configuration, customReferenceData){
	return ReactDOM.render(
		<Grid data={projects} config={configuration} filters={customReferenceData}/>,
		document.getElementById('grid')
	);
};

// const render = fucntion(projects, configuration, customReferenceData){
// 	// return ReactDOM.render(
// 	// 	<Grid data={projects.results} config={configuration} filters={customReferenceData}/>,
// 	// 	document.getElementById('grid')
// 	// );
// }

var predefineFilters = {"filterCriterions":[{"fieldName":"status","type":"string","operator":"in","logicalRelation":null,"criterionValue":null,"criterionValues":[{"@type":".StringFilterCriterionValue","value":"AIN ERROR"},{"@type":".StringFilterCriterionValue","value":"CIN PROGRESS"},{"@type":".StringFilterCriterionValue","value":"BNOT STARTED"},{"@type":".StringFilterCriterionValue","value":"CDRELEASE IN PROGRESS"},{"@type":".StringFilterCriterionValue","value":"ECANCEL IN PROGRESS"}]}],"sortCriterions":[{"fieldName":"name","direction":"ASCENDING"}],"pagingCriterion":{"pageStart":0,"pageSize":25},"options":[],"results":null,"dynamicAttributes":["PROJECT_NAME","ProjDtls.Addr","ProjDtls.City","ProjDtls.St"]};
var projects = {};
var filters = {
	data: {},
	filterCriterions: predefineFilters
};


render(projects, configuration, filters);

restService.post('http://illin3278.corp.amdocs.com:31500/dop/services/project/fetchProjects', filters.filterCriterions).then(function(fetchProjects){
	projects = fetchProjects.results
	render(projects, configuration, filters);
	console.log("firstRender");
	setTimeout(function(){ 
		restService.get('http://illin3278.corp.amdocs.com:31500/dop/services/ReferenceData/CustomReferenceData').then(function(customReferenceData){
			filters.data["customReferenceData"] = customReferenceData;
			render(projects, configuration, filters);
			console.log("secondRender");
		});
	}, 3000);
});