import * as React from "react"
import '../sass/global.scss'
import Container from '../components/container'
import Card from '../components/card'
import { graphql } from 'gatsby'

// markup
const IndexPage = ({data}) => {
	// graphQL query
	return (
  	<Container>
  		{ data.allContentfulRecipe.nodes.map((recipe, i) => {
  			return (
  				<Card 
  					key={recipe.id}
						title={recipe.title}
						img={recipe.image.file.url}
						updatedAt={recipe.updatedAt}
  				/>
			)	
  		})}
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
