import React from 'react';

class CheckBoxList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedItems:[]
		};
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
		var indexof = selectedItems.indexof(index);
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
		var valueField = this.props.config.valueField;
		var labelField = this.props.config.labelField;
		var checkBoxList = this.props.items.map ((item, index) => {
			return (
				<div key={index}>
					<label>
						<input type="checkbox" value={item[valueField]} onChange={this.handleItemChange.bind(this, index)} checked={item.checked ? true : false}/>
						{item[labelField]}
					</label>
				</div>
			);
		});
		return <div>{checkBoxList}</div>;
	}
}

export default CheckBoxList;