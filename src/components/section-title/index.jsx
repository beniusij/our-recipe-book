import React from 'react'
import './index.scss'

const SectionTitle = (props) => {
	return (
		<h2 className="section-title">
			{props.children}
		</h2> 
	)
}

export default SectionTitle