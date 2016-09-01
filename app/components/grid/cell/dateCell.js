import React from 'react';

class DateCell extends React.Component {
	
	render() {
		var dateMS = this.props.data[this.props.config.field];
		var date = new Date(dateMS);
		return (
			<div>
				{date.toLocaleDateString()}
			</div>
		);
	}
}
export default DateCell;