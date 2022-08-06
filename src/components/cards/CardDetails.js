import React, { useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'

export const CardDetails = () => {
	let {id} = useParams();
	let [character, updateCharacter] = useState([]);
	let [quote, setQuote] = useState('')
	let {firstName, fullName, imageUrl, family, title} = character;

  let api = `https://thronesapi.com/api/v2/Characters/${id}`;
  
  
useEffect(()=>{
    (async function(){
      let characterData = await fetch(api).then(res=>res.json())
      updateCharacter(characterData)
    })();
  }, [api])
  
async function getQuote(){
	let quoteApi = `https://api.gameofthronesquotes.xyz/v1/author/${firstName.toLowerCase()}/1`;
	let quoteData = await fetch(quoteApi).then((response) => response.json())
	setQuote(quoteData.sentence)
	console.log(quote)
	  };

	return (
		<div className="container d-flex justify-content-center">
			<div className="d-flex flex-column gap-3">
				<h1 className="text-center mt-5">{fullName}</h1>
				<img className="img-fluid" src={imageUrl} alt='not found'></img>
				<div className="text-center fs-6"><span className="fs-6 fw-bold">Title:</span> {title}</div>
				<div className="text-center fs-6"><span span className="fs-6 fw-bold">Family:</span> {family}</div>
				<button onClick={getQuote} className="btn btn-primary">Quote</button>
				<div style={{width:"400px"}} className="text-center">{quote}</div>
			</div>
		</div>
	)
}
