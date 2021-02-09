import * as React from "react"
import '../sass/global.scss'
import '../sass/layout.scss'
import Card from '../components/card'
import { graphql } from 'gatsby'

// markup
const IndexPage = ({data}) => {
	data.then( data => {
		console.log(data)		
	})
	return (
  	<div className="container">
  		<Card></Card>
  		<Card></Card>
  		<Card></Card>
  		<Card></Card>
  		<Card></Card>
  	</div>
  )
}

// graphQL query
const pageQuery = graphql`
	query MyQuery {
		allContentfulRecipe(limit: 1) {
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

export default IndexPage
