import React from 'react';

class Header extends React.Component {

	render() {
		var columnsConfig = this.props.configuration.columns;
		var columnsIds = Object.keys(columnsConfig);
		var headers = columnsIds.map((id) => {
			let columnConfig = columnsConfig[id];
			return <th key = {id}>{columnConfig.label}</th>
		});
		return (
			<thead>
				<tr>
					{headers}
				</tr>
			</thead>
		);
	}

}
export default Header;