import React from 'react';
import CheckBoxListFilter from './checkBoxListFilter';
import NameFilter from './nameFilter'

export function getFilter (filterConfig) {
	var Type; // make sure this var starts with a capital letter
	if(filterConfig.view === 'checkBoxListFilter'){
		Type = CheckBoxListFilter;
	}
	else if(filterConfig.view === 'nameFilter'){
		Type = NameFilter;
	}
	else{
		Type = filterConfig.view;
	}
	return Type;
}