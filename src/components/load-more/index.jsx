import React from 'react'
import './index.scss'

const LoadMore = ({ onClickHandle }) => {
	return (
		<div 
			className="container--load-more" 
			onClick={ onClickHandle }
		>
			<button className="load-more">
				Load More >
			</button>
		</div>
	)
}

export default LoadMore