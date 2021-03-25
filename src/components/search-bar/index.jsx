import React from 'react'
import './index.scss'

const SearchBar = (props) => {
	return (
		<div className="search-container">
			<input className="search__field" type="search" placeholder="Keywords, tags..." onChange={props.handleChange} />
		</div>
	)
}

export default SearchBar