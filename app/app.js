import React from 'react';
import ReactDOM from 'react-dom';
import * as restService from './service/restService' ;

restService.get('/projects').then(function(projects){
	ReactDOM.render(
		<h1>Hello, world!</h1>,
		document.getElementById('main')
	);
	//ReactDOM.render(<ProjectsList projects = {projects}/>, document.getElementById('main'));
});