import React from "react"
import Placeholder from '../../images/placeholder.jpg'
import './card.scss'

const data = {
  title: 'The Fantastic Vegetarian Lasagne',
  img: '',
  lastUpdated: Date.now()
}

const Card = (props) => {
	const dateTime = new Date(data.lastUpdated).toDateString()
	const img = data.img ? data.img : Placeholder

	return (
		<div className='card'>
			<div className='card__image-container' style={{backgroundImage: `url(${img})`,}}></div>
			<div className='card__content'>
				<h1 className='card__content--title'>{data.title}</h1>
				<p className='card__content--timestamp'>{dateTime}</p>
			</div>
		</div>
	)
}

export default Card