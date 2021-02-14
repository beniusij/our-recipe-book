import React from 'react'
import './index.scss'

const Header = (props) => {
	return (
		<header className='header' style={{backgroundImage: `url(${props.img})`}}>
			<div className='header--overlay'></div>
			{ props.children }
		</header>
	)
}

export default Header