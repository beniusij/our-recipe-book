import * as React from "react"
import '../sass/global.scss'
import Container from '../components/container'
import Card from '../components/card'
import LoadMore from '../components/load-more'
import { graphql } from 'gatsby'

const slugify = require('../utils/slugify.js')

// markup
const IndexPage = ({data}) => {
	// graphQL query
	return (
  	<Container>
  		{ data.allContentfulRecipe.nodes.map((recipe, i) => {
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
  		<LoadMore />
  	</Container>
  )
}

export default IndexPage

export const query = graphql`
	query RecipeQuery {
		allContentfulRecipe(limit: 5, sort: {order: ASC, fields: updatedAt}) {
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
