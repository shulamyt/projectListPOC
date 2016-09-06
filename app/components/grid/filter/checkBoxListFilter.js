import React from 'react';
import Filter from './filter';
import CheckBoxList from './../../checkBoxList/checkBoxList';

class CheckBoxListFilter extends Filter {
	
	getCriterion(){
		console.log(getCriterion);
		return {};
	}

	render() {
		var items = this.props.data;
		var fields = this.props.config.field.split('.');
		for(let i in fields){
			items = items[fields[i]];
		}
		var config = {
			"valueField" : "code",
			"labelField" : "decode"
		}
		var selectedItems = [];
		return (
			<div className="filterMenu">
				{/*<input type="text" value={this.state.value} onChange={this.handleChange}/>*/}
				<CheckBoxList items={items} selectedItems={selectedItems} config={config}/>
				<div onClick={this.props.onFilterChange}>OK</div>
			</div>
		);
	}
}

export default CheckBoxListFilter;