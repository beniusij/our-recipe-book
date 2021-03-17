import React from 'react'
import './index.scss'

const LoadMore = (props) => {
	return (
		<div className="container--load-more">
			<button className="load-more" onClick={(e) => { console.log('Clicked load more') }}>
				Load More >
			</button>
		</div>
	)
}

export default LoadMore