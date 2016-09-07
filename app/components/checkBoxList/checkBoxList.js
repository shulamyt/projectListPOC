import React from 'react';

import isEmpty from 'lodash/isEmpty';

class CheckBoxList extends React.Component {

	constructor(props) {
		super(props);
		var selectedItems = [];
		for(let i=0; i<props.selectedItems.length; i++){
			var selectedItem = props.selectedItems[i];
			var selectedItemIndex = this.props.items.findIndex(function(element, index, array){
				return element.code == selectedItem;
			});
			if(selectedItemIndex > -1){
				selectedItems.push(selectedItemIndex);
			}
		}
		this.state = {
			"selectedItems": selectedItems
		};
	}

	getSelectedItems(){
		var selectedItems = [];
		for(let i=0; i<this.props.items.length; i++){
			if(this.state.selectedItems.indexOf(i) > -1){
				selectedItems.push(this.props.items[i]);
			}
		}
		return selectedItems;
	}

	reset() {
		this.setState({selectedItems:[]});
	}
	
	checkAll() {
		var selectedItems = [];
		for(let i in this.props.items){
			selectedItems.push(i);
		}
		this.setState({'selectedItems':selectedItems});
	}

	handleItemChange(index) {
		var selectedItems = this.state.selectedItems;
		var indexof = selectedItems.indexOf(index);
		if(indexof > -1){
			selectedItems.splice(indexof, 1);
		}
		else{
			selectedItems.push(index);
		}
		this.setState({'selectedItems': selectedItems});

		if(this.props.onChange) {
			this.props.onChange(selectedValues);
		}
	}

	render() {
		if(isEmpty(this.props.items)){
			return null;
		}
		var valueField = this.props.config.valueField;
		var labelField = this.props.config.labelField;
		var checkBoxList = this.props.items.map ((item, index) => {
			var isChecked = this.state.selectedItems.indexOf(index) > -1;
			return (
				<div key={index}>
					<label>
						<input type="checkbox" value={item[valueField]} onChange={this.handleItemChange.bind(this, index)} checked={isChecked}/>
						{item[labelField]}
					</label>
				</div>
			);
		});
		return <div>{checkBoxList}</div>;
	}
}

export default CheckBoxList;