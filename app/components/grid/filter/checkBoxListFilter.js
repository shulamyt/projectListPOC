import React from 'react';
import CheckBoxList from './../../checkBoxList/checkBoxList';

class CheckBoxListFilter extends React.Component {
	
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
			<div>
				{/*<input type="text" value={this.state.value} onChange={this.handleChange}/>*/}
				<CheckBoxList items={items} selectedItems={selectedItems} config={config}/>
			</div>
		);
	}
}
export default CheckBoxListFilter;