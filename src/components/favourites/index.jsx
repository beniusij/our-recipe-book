import React from 'react'
import Container from "../container"
import SectionTitle from '../section-title'
import Card from '../card'

const itemName = 'favourite-recipes'

const Favourites = () => {
	// Check if window is available
	if (typeof window === 'undefined') return ('')

	const localStorage = window.localStorage
	let favourites = JSON.parse(localStorage.getItem(itemName))
	favourites = typeof favourites === 'undefined' || favourites === null ? {} : favourites
	const keys = Object.keys(favourites)

	return (
		<>
			{ keys.length > 0 ? (
					<Container>
						<SectionTitle>Favourite recipes</SectionTitle>
						{
							keys.map((key, i) => {
								return (
									<Card
										key={i}
										title={favourites[key].title}
										img={favourites[key].image.file.url}
										updatedAt={favourites[key].updatedAt}
										link={`/recipes/${key}`} 
									/>
								)
							})
						}
					</Container>
				) : ''
			}
		</>	
	)
}

export default Favourites