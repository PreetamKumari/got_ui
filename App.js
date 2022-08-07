import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Cards from './components/cards/Cards'
import Search from './components/search/Search'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CardDetails } from './components/cards/CardDetails'
import Pagination from './components/pagination/Pagination'
// import SpinnerFunction from './components/spinner/Spinner'

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<CardDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}

const Home = () => {
  // let [isLoading, setIsLoading] = useState(true)
  let [characters, updateCharacters] = useState([]);
  let [name, setName] = useState('');
  let [pagenumber, setPageNumber] = useState(0)

  let api = `https://preetam-got-api.herokuapp.com/api/characters?page=${pagenumber}&fullName=${name}`;
  console.log(api)
  // let localApi = `http://localhost:5000/api/characters/?page=${pagenumber}&fullName=${name}`


  useEffect(()=>{
    (async function(){
      let charactersData = await fetch(api).then(res=>res.json())
      updateCharacters(charactersData)
      // setIsLoading(false)
    })();
  }, [api])
  return (
    // isLoading? <SpinnerFunction />:
    <div className="App">
        <h1 className='text-center ubuntu my-5'>
          Game of Thrones <span className="text-primary">Wiki</span>
          <br></br>
        </h1>
        <Search setPageNumber = {setPageNumber} setName = {setName}/>
        <div className="container">
          <div className="row">
              {/* <Filters /> */}
            <div className="col-12">
              <div className="row">
                <Cards page="/" characters = {characters}/>
              </div>
            </div>
          </div>
        </div>
        <Pagination pagenumber={pagenumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
