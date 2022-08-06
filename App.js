import React, { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Cards from './components/cards/Cards'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CardDetails } from './components/cards/CardDetails'

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
  let [characters, updateCharacters] = useState([]);
  // let [search, setSearch] = useState(1)

  let api = `https://preetam-got-api.herokuapp.com/api/characters`;


  useEffect(()=>{
    (async function(){
      let charactersData = await fetch(api).then(res=>res.json())
      updateCharacters(charactersData)
    })();
  }, [api])
  return (
    <div className="App">
        <h1 className='text-center ubuntu my-5'>
          Game of Thrones <span className="text-primary">Wiki</span>
          <br></br>
        </h1>
        {/* <Search/> */}
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
    </div>
  );
}

export default App;
