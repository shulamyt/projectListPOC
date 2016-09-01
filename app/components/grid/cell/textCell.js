import React from 'react';

class TextCell extends React.Component {
	
	render() {
		var text = this.props.data;
		var fields = this.props.config.field.split('.');
		for(let i in fields){
			text = text[fields[i]];
		}
		return (
			<div>{text}</div>
		);
	}
}
export default TextCell;