import React from 'react';

import isEmpty from 'lodash/isEmpty';
import find from 'lodash/find';
import remove from 'lodash/remove';

class CheckBoxList extends React.Component {
	
	propTypes: {
		idField: React.PropTypes.element.isRequired,
		labelField: React.PropTypes.element.isRequired,
		items: React.PropTypes.element.isRequired,
		initSelectedItems: React.PropTypes.array,
		initSelectedItemsIDs: React.PropTypes.array,
		onChange: React.PropTypes.func
	}

	constructor(props) {
		super(props);
		this.state = {
			"selectedItems": this.getInitSelectedItems(props)
		};
	}

	getInitSelectedItems(props){
		if(!isEmpty(props.initSelectedItems)){
			return props.initSelectedItems;
		}
		else if(!isEmpty(props.initSelectedItemsIDs)){
			var initSelectedItems = [];
			props.initSelectedItemsIDs.forEach(function(id){
				var findMe = {};
				findMe[props.idField] = id;
				initSelectedItems.push(find(props.items, findMe));
			});
			return initSelectedItems;
		}
		return [];
	}

	getSelectedItems(){
		return this.state.selectedItems;
	}

	setSelectedItems(selectedItems){
		this.setState({'selectedItems':selectedItems});
	}

	reset() {
		this.setSelectedItems([]);
	}
	
	checkAll() {
		this.setSelectedItems(this.props.items);
	}

	onCheckedChange(item) {
		var selectedItems = this.state.selectedItems;
		if(this.isChecked(item)){
			remove(selectedItems, (removeItem) => {
				return removeItem[this.props.idField] == item[this.props.idField];
			});
		}else{
			selectedItems.push(item);
		}
		this.setSelectedItems(selectedItems);
		if(this.props.onChange) {
			this.props.onChange(checkedItems);
		}
	}

	findItem(item, items){
		var findMe = {};
		findMe[this.props.idField] = item[this.props.idField];
		return find(items, findMe);
	}

	isChecked(item){
		return this.findItem(item, this.state.selectedItems);
	}

	render() {
		if(isEmpty(this.props.items)){
			return null;
		}
		var checkBoxList = this.props.items.map ((item) => {
			return (
				<label key={item[this.props.idField]}>
					<input type="checkbox" value={item} onChange={this.onCheckedChange.bind(this, item)} checked={this.isChecked(item)}/>
					{item[this.props.labelField]}
				</label>
			);
		});
		return <div className="checkBoxList">{checkBoxList}</div>;
	}
}

export default CheckBoxList;