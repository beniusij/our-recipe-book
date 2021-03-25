import React, { useState } from 'react'
import solidStar from '../../images/star-solid.svg'
import emptyStar from '../../images/star-regular.svg'
import './index.scss'

const slugify = require('../../utils/slugify.js')
const itemName = 'favourite-recipes'

const FavouritesStar = ({ data }) => {
	// Set up state
	const [favourite, setFavourite] = useState(false)

	// Check if window is available
	if (typeof window === 'undefined') return (favourite)

	// Get item
	const localStorage = window.localStorage
	let favourites = JSON.parse(localStorage.getItem(itemName))

	// Create the key
	const key = slugify(data.title)

	// Create blank array if item doesn't exist
	favourites = favourites ? favourites : {}

	// Check if this recipe is favourited and update state
	if (key in favourites && !favourite) setFavourite(key in favourites)

	// onClick handler to favourite/unfavourite the 
	const handleClick = () => {
		if(favourite) {
			delete favourites[key]
		} else {
			favourites[key] = data
		}

		// Save item
		localStorage.setItem(itemName, JSON.stringify(favourites))

		// Update state
		setFavourite(!favourite)
	}
	
	// Before rendering, determine which star to show
	const star = favourite ? solidStar : emptyStar 
	
	return (
		<div className="star-container">
			<img src={star} alt="Favourite button" className="star-btn" onClick={handleClick} onKeyPress={() => {}} />
		</div>
	)
}

export default FavouritesStar