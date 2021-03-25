import React from 'react'
import './index.scss'
import icon from '../../images/dish.png'

const Portions = ({ portionCount }) => {
	const counter = portionCount === 1 ? portionCount + " portion" : portionCount + " portions" 

	return (
		<div className="portions">
			<img src={icon} alt="Portions icon" className="portions__icon" />
			<p className="portions__text">{counter}</p>
		</div>
	)
}

export default Portions