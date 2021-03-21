import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useFlexSearch } from 'react-use-flexsearch'
import "./index.scss"
import SearchBar from "../search-bar"
import Container from "../container"
import SectionTitle from '../section-title'
import Card from '../card'

const slugify = require('../../utils/slugify.js')

const Search = (props) => {
	const [searchQuery, setSearchQuery] = useState("")

	const data = useStaticQuery(graphql`
    query {
      localSearchRecipes {
        index
        store
      }
    }
  `)

	const handleChange = (e) => {
		if (e.target.value.length > 3) {
			setSearchQuery(e.target.value)
		} else if (e.target.value.length === 0) {
			setSearchQuery("")
		}
	}

  const { index, store } = data.localSearchRecipes
  const results = useFlexSearch(searchQuery, index, store)

	return (
		<Container>
			<SearchBar handleChange={handleChange} />
			{ results.length > 0 ? <SectionTitle>Results for {searchQuery}</SectionTitle> : "" }
			{
				results.length > 0 ?
				results.map((node, key) => {
					return (
						<Card
							key={key}
							title={node.title}
							img={node.image}
							updatedAt={node.updatedAt}
							link={`/recipes/${slugify(node.title)}`} 
						/>
					)
				}) : ''
			}
		</Container>	
	)
}

export default Search