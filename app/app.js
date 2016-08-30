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
			label: "Name"
		},
		type:{
			label: "Type"
		},
		stages:{
			label: "Stages"
		},
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