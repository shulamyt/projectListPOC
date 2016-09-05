import React from 'react';
import get from 'lodash/get';

class DateCell extends React.Component {
	
	render() {
		var dateMS = get(this.props.data, this.props.config.field);
		var date = new Date(dateMS);
		return (
			<div>
				{date.toLocaleDateString()}
			</div>
		);
	}
}
export default DateCell;