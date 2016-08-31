import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './service/restService' ;
import Grid from './components/grid/grid' ;

const configuration = {
	//columnsOrder: [],
	columns : {
		// status: {

		// },
		name: {
			label: "Name",
			fieldNames: ["name"],
			view: "text"
		},

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
		<Grid data={projects} configuration={configuration}/>,
		document.getElementById('grid')
	);
});