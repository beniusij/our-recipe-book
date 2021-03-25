import React from 'react'
import './index.scss'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const RichText = (props) => {
	const body = JSON.parse(props.text)
	return (
		<div className="rich-text">
			<h2>{props.title}</h2>
			{ documentToReactComponents(body) }
		</div>
	)
}

export default RichText