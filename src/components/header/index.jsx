import React from 'react'
import './index.scss'
import Container from '../container'

const Header = (props) => {
	return (
		<header className='header' style={{backgroundImage: `url(${props.img})`}}>
			<div className='header--overlay'></div>
			<Container>
				{ props.children }
			</Container>
		</header>
	)
}

export default Header