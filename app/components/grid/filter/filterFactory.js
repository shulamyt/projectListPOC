import CheckBoxListFilter from './checkBoxListFilter';

export function getFilter (filterConfig) {
	var Type; // make sure this var starts with a capital letter
	if(filterConfig.view === 'checkBoxListFilter'){
		Type = CheckBoxListFilter;
	}
	else{
		Type = filterConfig.view;
	}
	return Type;
}