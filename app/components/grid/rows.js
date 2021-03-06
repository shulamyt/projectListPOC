import React from 'react';
import * as CellViewFactory from './cell/cellViewFactory';
import isEmpty from 'lodash/isEmpty';

class Rows extends React.Component {
	
	generateCellKey(rowData, columnConfig){
		return rowData.id + '_' + columnConfig.id;
	}

	render() {
		if(isEmpty(this.props.data)){
			return null;
		}
		var rows = this.props.data.length ? this.props.data.map((rowData) => {
			var columnsConfig = this.props.config.columns;
			var columnsIds = Object.keys(columnsConfig);
			var row = columnsIds.map((columnId) => {
				let columnConfig = columnsConfig[columnId];
				columnConfig['id'] = columnId;
				var CellView = CellViewFactory.getCellView(columnConfig);
				var cellKey = this.generateCellKey(rowData, columnConfig);
				return <td key={cellKey}><CellView data = {rowData} config = {columnConfig}/></td>;
			});
			return <tr key={rowData.id}>{row}</tr>;
		}) : null;
		return (
			<tbody>
				{rows}
			</tbody>
		);
	}
}
export default Rows;