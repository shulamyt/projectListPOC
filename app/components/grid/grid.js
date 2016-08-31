import React from 'react';
import Header from './header';
import Rows from './rows';

class Grid extends React.Component {

	render() {
		return (
			<table>
				<Header configuration={this.props.configuration}/>
				<Rows data={this.props.data} configuration={this.props.configuration}/>
			</table>
		);
	}
}
export default Grid;