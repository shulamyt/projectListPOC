import React from 'react';
import * as CellViewFactory from './cell/cellViewFactory' ;

class Rows extends React.Component {
	
	generateCellKey(rowData, columnConfig){
		return rowData.id + '_' + columnConfig.id;
	}

	render() {
		var rows = this.props.data.map((rowData) => {
			var columnsConfig = this.props.configuration.columns;
			var columnsIds = Object.keys(columnsConfig);
			var row = columnsIds.map((columnId) => {
				let columnConfig = columnsConfig[columnId];
				columnConfig['id'] = columnId;
				var CellView = CellViewFactory.getCellView(columnConfig);
				var cellKey = this.generateCellKey(rowData, columnConfig);
				return <td key={cellKey}><CellView data = {rowData} config = {columnConfig}/></td>;
			});
			return <tr key={rowData.id}>{row}</tr>;
		});
		return (
			<tbody>
				{rows}
			</tbody>
		);
	}
}
export default Rows;