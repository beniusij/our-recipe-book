import React from 'react'
import Container from '../../components/container'
import Header from '../../components/header'
import List from '../../components/list'
import RichText from '../../components/rich-text'

const Recipe = (pageContext) => {
	const recipe = pageContext.pathContext.recipe
	return (
		<>
		<Header img={recipe.image.file.url} >
			<h1>{recipe.title}</h1>
		</Header>
		<Container>
			<div className='content ingredients'>
				<List 
					title= { 'You will need...' }
					ingredients={ recipe.ingredients } 
				/>
			</div>
			<div className='content instructions'>
				<RichText title={'And here is how to do it...'} text={ recipe.instructions.raw } />
			</div>
		</Container>
		</>
	)
}

export default Recipe