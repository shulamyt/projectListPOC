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
		// console.log("this.props.filterCriterion = " + this.props.filterCriterion.criterionValues);
		// var map(this.props.filterCriterion.criterionValues, 'value');
		// _.map(users, 'id');
		this.state = {
			filterItems: undefined
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

	handleFilterItemsChange(event) {
    	this.setState({filterItems: event.target.value});
  	}

  	filterItems(items){
  		var filteredItems = items;
  		if(!isEmpty(this.state.filterItems)){
			filteredItems = filter(items, (item) => {
				return item["decode"].indexOf(this.state.filterItems) !== -1;
			});
		}
		return filteredItems;
  	}

	render() {
		var config = {
			"valueField" : "code",
			"labelField" : "decode"
		}
		var items = get(this.props.data, this.props.config.field);
		items = this.filterItems(items);
		var selectedItems = [];
		if(this.props.filterCriterion){
			selectedItems = map(this.props.filterCriterion.criterionValues, 'value');
		}
		return (
			<div className="filterMenu">
				<input type="text" value={this.state.filterItems} onChange={this.handleFilterItemsChange.bind(this)}/>
				<CheckBoxList ref={(checkBoxList) => this._checkBoxList = checkBoxList} items={items} selectedItems={selectedItems} config={config}/>
				<div onClick={this.clickOk.bind(this)}>OK</div>
			</div>
		);
	}
}

export default CheckBoxListFilter;