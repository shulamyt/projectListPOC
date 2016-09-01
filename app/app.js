import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './service/restService';
import Grid from './components/grid/grid';

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
			view: "text"
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

restService.get('/projects').then(function(projects){
	ReactDOM.render(
		<Grid data={projects.results} config={configuration}/>,
		document.getElementById('grid')
	);
});