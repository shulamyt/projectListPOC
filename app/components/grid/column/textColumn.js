import React from 'react';

class TextColumn extends React.Component {
	
	render() {

		return (
			<div>
				{this.props.data.name}
			</div>
		);
	}
}
export default TextColumn;