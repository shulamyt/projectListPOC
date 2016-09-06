import React from 'react';
import * as FilterFactory from './filter/filterFactory';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';


class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			openFilterColumnId: undefined
		};
	}

	onCriterionChange(columnId, criterion){
		this.closeOpenFilter();
		criterion["fieldName"] = columnId;
		this.props.onCriterionChange(columnId, criterion);
	}

	closeOpenFilter(){
		this.setState({'openFilterColumnId': undefined});
	}

	openFilter(columnId){
		this.setState({'openFilterColumnId': columnId});
	}

	isFilterOpen(columnId){
		return this.state.openFilterColumnId == columnId;
	}

	toggleFilter(columnId){
		if(this.isFilterOpen(columnId)){
			this.closeOpenFilter();
		}else{
			this.openFilter(columnId);
		}
	}

	onFilterClick(columnId){
		this.toggleFilter(columnId);
	}

	hasFilterMetadata(filterConfig){
		if(isEmpty(filterConfig) || isEmpty(this.props.filters) || isEmpty(this.props.filters.data)){
			return false;
		}
		var data = get(this.props.filters.data, filterConfig.field);
		return !isEmpty(data);
	}

	getFilterMenu(columnId, filterConfig) {
		if(this.isFilterOpen(columnId)){		
			var FilterView = FilterFactory.getFilter(filterConfig);
			return <FilterView config={filterConfig} data={this.props.filters.data} onFilterChange={this.onCriterionChange.bind(this, columnId)}/>;
		}
	}

	getFilterButton(columnId) {
		return <div onClick={this.onFilterClick.bind(this, columnId)}>F</div>
	}

	render() {
		var columnsConfig = this.props.config.columns;
		var columnsIds = Object.keys(columnsConfig);
		
		var headers = columnsIds.map((columnId) => {
			var columnConfig = columnsConfig[columnId];
			var filterConfig = columnConfig.filter;
			if(this.hasFilterMetadata(filterConfig)){
				var filterButton = this.getFilterButton(columnId);
				var filterMenu = this.getFilterMenu(columnId, filterConfig);
			}
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