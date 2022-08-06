import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Cards.module.scss'

const Cards = ({characters, page}) => {
	let display;
	console.log(characters)
	if(!characters) {
		display = 'No Characters Found'
	} else {
		display = characters.map(character => {
			let {id, fullName, imageUrl, title} = character;
			return <Link 
				style = {{textDecoration: "none"}}
				to = {`${page}${id}`}
				key = {id} className="col-4 mb-4">
					<div className = {styles.cards}>
						<img className={`${styles.img} img-fluid`} src = {imageUrl} alt='no image found'></img>
						<div className="content">
							<div className="fs-4 fw-bold">{fullName}</div>
							<div className="fs-6 mb-4">{title}</div>
						</div>
					</div>
				</Link>
		})
	}
	return <>{display}</>
}

export default Cards
