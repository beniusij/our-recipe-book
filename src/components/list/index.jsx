import React from 'react'
import './index.scss'

const List = (props) => {
	return (
		<>
			{
				props.title &&
				<h2 className='unorder-list__title'>{ props.title }</h2> 
			}
			<ul className='unorder-list'>
				{ props.ingredients.map((ingredient, i) => {
					return (
						<li key={ i } className='unorder-list__item'>{ ingredient }</li>
					)
				})}
			</ul>
		</>
	)
}

export default List