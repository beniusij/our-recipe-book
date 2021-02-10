import * as React from "react"
import '../sass/global.scss'
import '../sass/layout.scss'
import Card from '../components/card'
import { graphql } from 'gatsby'

// markup
const IndexPage = ({data}) => {
	// graphQL query
	return (
  	<div className="container">
  		{ data.allContentfulRecipe.nodes.map((recipe, i) => {
  			return (
  				<Card 
  					key={i}
						title={recipe.title}
						img={recipe.image.file.url}
						updatedAt={recipe.updatedAt}
  				/>
				)	
  		})}
  	</div>
  )
}

export default IndexPage

export const query = graphql`
	query RecipeQuery {
		allContentfulRecipe(limit: 5, sort: {order: ASC, fields: updatedAt}) {
		    nodes {
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
