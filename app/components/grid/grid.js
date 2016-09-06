import React from 'react';
import Header from './header';
import Rows from './rows';

class Grid extends React.Component {

	render() {
		return (
			<div className="grid">
				<table>
					<Header config={this.props.config} filters={this.props.filters} onCriterionChange={this.props.onCriterionChange}/>
					<Rows data={this.props.data} config={this.props.config}/>
				</table>
			</div>
		);
	}
}
export default Grid;