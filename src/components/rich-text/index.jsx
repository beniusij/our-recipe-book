import React from 'react'
import './index.scss'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// const Text = ({ children }) => <p>{children}</p>

// const options = {
// 	renderMark: {},
// 	renderNode: {
// 		[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
// 	}
// }

const RichText = (props) => {
	console.log(props.text)
	return (
		<>
			<h2>{props.title}</h2>
			{ renderRichText(props.text) }
		</>
	)
}

export default RichText