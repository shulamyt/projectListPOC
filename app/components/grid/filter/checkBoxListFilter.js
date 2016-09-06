import React from 'react';
import Filter from './filter';
import CheckBoxList from './../../checkBoxList/checkBoxList';
import filter from 'lodash/filter';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';

class CheckBoxListFilter extends Filter {
	
	constructor(props) {
		super(props);
		this.state = {
			filterItems: undefined
		};
	}

	clickOk(){
		if(this.filterChanged()){
			this.props.onFilterChange();
		}
	}

	handleFilterItemsChange(event) {
    	this.setState({filterItems: event.target.value});
  	}

	render() {
		var config = {
			"valueField" : "code",
			"labelField" : "decode"
		}
		var items = get(this.props.data, this.props.config.field);
		if(!isEmpty(this.state.filterItems)){
			items = filter(items, (item) => {
				return item["decode"].indexOf(this.state.filterItems) !== -1;
			});
		}
		var selectedItems = [];
		return (
			<div className="filterMenu">
				<input type="text" value={this.state.filterItems} onChange={this.handleFilterItemsChange.bind(this)}/>
				<CheckBoxList items={items} selectedItems={selectedItems} config={config}/>
				<div onClick={this.clickOk}>OK</div>
			</div>
		);
	}
}

export default CheckBoxListFilter;