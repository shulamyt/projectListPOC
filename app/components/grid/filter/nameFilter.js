import React from 'react';
import Filter from './filter';

class NameFilter extends Filter {

	render() {
		return (
				<div className="nameFilter">
			        <input type="text" placeholder="Enter filter" />
			        <input type="submit" value="ok" />
		      	</div>
			);
		}
}

export default NameFilter;