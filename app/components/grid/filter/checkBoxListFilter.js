import React from 'react';
import Filter from './filter';
import CheckBoxList from './../../checkBoxList/checkBoxList';
import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

class CheckBoxListFilter extends Filter {
	
	constructor(props) {
		super(props);
		this.state = {
			"search" : undefined
		};
	}

	isFilterChanged(){
		return true;
	}

	createCriterionValues(selectedItems){
		var criterionValues = [];
		selectedItems.forEach((item)=>{
			let criterion = {
				"@type" : ".StringFilterCriterionValue",
				"value" : item.code
			};
			criterionValues.push(criterion);
		})
		return criterionValues;
	}

	clickOk(){
		if(this.isFilterChanged()){
			console.log(this._checkBoxList);
			var selectedItems = this._checkBoxList.getSelectedItems();
			var criterionValues = this.createCriterionValues(selectedItems);
			var criterion = {
				"type":"string",
				"operator":"in",
				"logicalRelation":null,
				"criterionValue":null,
				"criterionValues":criterionValues
			};
			this.props.onFilterChange(criterion);
		}
	}

	onSearchChange(event) {
    	this.setState({"search": event.target.value});
  	}

  	applySearch(items){
  		var filteredItems = items;
  		if(!isEmpty(this.state.search)){
			filteredItems = filter(items, (item) => {
				return item["decode"].indexOf(this.state.search) !== -1;
			});
		}
		return filteredItems;
  	}

  	getCheckListItems(){
  		var items = get(this.props.data, this.props.config.field);
		items = this.applySearch(items);
		return items;
  	}

  	getInitSelectedItemsIDs(){
  		if(!isEmpty(this.props.filterCriterion)){
  			return map(this.props.filterCriterion.criterionValues, 'value');
  		}
  	}

	render() {
		return (
			<div className="filterMenu">
				<input type="text" value={this.state.search} onChange={this.onSearchChange.bind(this)}/>
				<CheckBoxList
					ref={(checkBoxList) => this._checkBoxList = checkBoxList}
					items={this.getCheckListItems()}
					initSelectedItemsIDs={this.getInitSelectedItemsIDs()}
					labelField="decode"
					idField="code"
				/>
				<div onClick={this.clickOk.bind(this)}>OK</div>
			</div>
		);
	}
}

export default CheckBoxListFilter;