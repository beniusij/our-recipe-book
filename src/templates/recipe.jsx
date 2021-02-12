import React from 'react'
// import './index.scss'
import Container from '../components/container'

const Recipe = ({ pageContext }) => {
	// console.log(pageContext)
	const recipe = pageContext
	return (
		<Container>
			<p>{recipe.title}</p>
			<p>Test</p>
		</Container>
	)
}

export default Recipe