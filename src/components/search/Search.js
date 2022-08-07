import React from 'react'
import styles from './Search.module.scss'

const Search = ({setName, setPageNumber}) => {
	return (
			<form className={`${styles.form} d-flex justify-content-center`}>
				<input onChange={
					e=> {setPageNumber(0);
					setName(e.target.value)}
					} className={`${styles.input}`} placeholder="Search Character" type="text"></input>
				<button onClick={
					e=>{
						e.preventDefault();
					}
				}
				className={`${styles.btn} btn btn-primary`}>Search</button>
			</form>
	)
}

export default Search
