import TextCell from './textCell';
import DateCell from './dateCell';

export function getCellView (columnConfig) {
	var Type; // make sure this var starts with a capital letter
	if(columnConfig.view === 'text'){
		Type = TextCell;
	}
	else if(columnConfig.view === 'date'){
		Type = DateCell;
	}
	else{
		Type = columnConfig.view;
	}
	return Type;
}