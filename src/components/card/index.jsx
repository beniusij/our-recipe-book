import React from "react"
import Placeholder from '../../images/placeholder.jpg'
import { Link } from 'gatsby'
import './index.scss'

const Card = (props) => {
	const img = props.img ? props.img : Placeholder

	return (
		<Link to={props.link} className="card--link">
			<div className='card'>
				<div className='card__image-container' style={{backgroundImage: `url(${img})`,}}></div>
				<div className='card__content'>
					<h1 className='card__content--title'>{props.title}</h1>
					<p className='card__content--timestamp'>{props.updatedAt}</p>
				</div>
			</div>
		</Link>
	)
}

export default Card