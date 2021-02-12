import React from 'react'
// import './index.scss'
import Container from '../components/container'
import Header from '../components/header'

const Recipe = (pageContext) => {
	const recipe = pageContext.pathContext.recipe
	// console.log()
	return (
		<>
		<Header
			img={recipe.image.file.url}
		>
			<h1>{recipe.title}</h1>
		</Header>
		<Container></Container>
		</>
	)
}

export default Recipe