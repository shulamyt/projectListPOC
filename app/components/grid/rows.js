import React from 'react';
import Text from './column/textColumn';

class Rows extends React.Component {
	getRowView(){

	}

	render() {
		var rows = this.props.data.map((item) => {
			var columnsConfig = this.props.configuration.columns;
			var columnsIds = Object.keys(columnsConfig);
			var row = columnsIds.map((id) => {
				let columnConfig = columnsConfig[id];
				let viewData = {};
				for(var i in columnConfig.fieldNames){
					var field = columnConfig.fieldNames[i];
					viewData[field] = item[field];
				};
				if(columnConfig.view === 'text'){
					return <td>
								<Text data={viewData} configuration={columnConfig}/>
							</td>;
				}
			});
			return <tr key = {item.id}>{row}</tr>
		});
		return (
			<tbody>
				{rows}
			</tbody>
		);
	}
}
export default Rows;