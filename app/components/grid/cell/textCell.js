import React from 'react';
import get from 'lodash/get';

class TextCell extends React.Component {
	
	render() {
		var text = get(this.props.data, this.props.config.field);
		return (
			<div>{text}</div>
		);
	}
}
export default TextCell;