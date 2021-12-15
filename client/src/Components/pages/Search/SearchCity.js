import React from 'react';

function SearchCity(props) {

	return (
		<div>
			<div className="search-container">
				<input type="search" name="search" onChange={props.onCity()}></input>
			</div>
		</div>
	);
}

export default SearchCity;