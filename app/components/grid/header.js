import React from 'react';
import * as FilterFactory from './filter/filterFactory';

class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			openFilterColumnId: undefined
		};
	}

	onFilterClick(columnId){
		console.log(this.state.openFilterColumnId);
		var openFilterColumnId = this.state.openFilterColumnId;
		if(openFilterColumnId == columnId){
			this.setState({'openFilterColumnId': undefined});
		}else{
			this.setState({'openFilterColumnId': columnId});
		}
	}

	isFilterOpen(columnId){
		return this.state.openFilterColumnId == columnId;
	}

	hasFilterMetadata(filterConfig){
		if(!this.props.filters){
			return false;
		}
		var data = this.props.filters.data;

		var fields = filterConfig.field.split('.');
		for(let i in fields){
			data = data[fields[i]];
		}
		return true;
	}

	getFilterMenu(columnId) {
		if(this.isFilterOpen(columnId)){
			var filterConfig = this.props.config.columns[columnId].filter;
			if(this.hasFilterMetadata(filterConfig)){
				var FilterView = FilterFactory.getFilter(filterConfig);
				return <FilterView config={filterConfig} data={this.props.filters.data}/>;
			}
		}
	}

	getFilterButton(columnId, columnConfig) {
		if(columnConfig.filter){
			return <div onClick={this.onFilterClick.bind(this, columnId)}>F</div>
		}
	}

	render() {
		var columnsConfig = this.props.config.columns;
		var columnsIds = Object.keys(columnsConfig);
		
		var headers = columnsIds.map((columnId) => {
			let columnConfig = columnsConfig[columnId];
			var filterButton = this.getFilterButton(columnId, columnConfig);
			var filterMenu = this.getFilterMenu(columnId);
			return(
				<th key = {columnId}>
					<div>{columnConfig.label}</div>
					{filterButton}
					{filterMenu}
				</th>);
		});
		return (
			<thead>
				<tr>
					{headers}
				</tr>
			</thead>
		);
	}

}
export default Header;