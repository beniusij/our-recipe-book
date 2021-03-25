import React, { useState, useEffect } from "react"
import '../sass/global.scss'
import Container from '../components/container'
import Card from '../components/card'
import LoadMore from '../components/load-more'
import { graphql, useStaticQuery } from "gatsby"
import Search from '../components/search'
import SectionTitle from '../components/section-title'

const slugify = require('../utils/slugify.js')

// markup
const IndexPage = ({data}) => {
	// graphQL query
	const recipes = data.allContentfulRecipe.nodes

	// Increment for pagination
	const increment = 4

	// State for recipes to show
	const [list, setList] = useState([...recipes.slice(0, increment)])

	// State to trigger load more
	const [loadMore, setLoadMore] = useState(false)

	// State to check if there is more to load
	const [hasMore, setHasMore] = useState(recipes.length > increment)

	// Load more button click
	const handleLoadMore = () => {
		setLoadMore(true)
	}

	// Handle loading more articles
	useEffect(() => {
		if (loadMore && hasMore) {
			const currentLenght = list.length
			const isMore = currentLenght < recipes.length
			const next = isMore
				? recipes.slice(currentLenght, currentLenght + increment)
				: []
			setList([...list, ...next])
			setLoadMore(false)
		}
	}, [loadMore, hasMore]) //eslint-disable-line

	useEffect(() => {
		const isMore = list.length < recipes.length
		setHasMore(isMore)
	}, [list]) //eslint-disable-line

	return (
		<>
			<Search />
		  	<Container>
			  	<SectionTitle>All our recipes</SectionTitle>
		  		{ list.map((recipe, i) => {
		  			return (
		  				<Card
		  					key={i} 
								title={recipe.title}
								img={recipe.image.file.url}
								updatedAt={recipe.updatedAt}
								link={`/recipes/${slugify(recipe.title)}`}
		  				/>
					)	
		  		})}

		  		{
		  			hasMore ?
		  			<LoadMore onClickHandle={handleLoadMore} /> :
		  			''
		  		}
		  	</Container>
	  	</>
	)
}

export default IndexPage

export const query = graphql`
	query RecipeQuery {
		allContentfulRecipe(sort: {order: ASC, fields: updatedAt}) {
		    nodes {
		    	id
		      title
		      image {
		      	file {
	      			url
		      	}
		      }
		      updatedAt(fromNow: true)
		    }
		}
	}
`	
