import React from 'react'
import "../Css/Search.css"
import { useEffect, useState } from 'react'
import { Context } from '../../utils/context'
import { useContext } from 'react'
import Card from "../../Components/Card"
const Popular = () => {
  const { searchData, setsearchData } = useContext(Context)
  const { search, setsearch } = useContext(Context)
  const { type, settype } = useContext(Context)
  //Fetching data for search page and giving it to state we are taking here type and search title by states
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/${type}?api_key=4c6e4ce791a84f0179c4430a3a414b2f&query=${search}`)
      .then(res => res.json())
      .then(data => setsearchData(data.results))
  }, [search])
//Chaing type of Data 
  const changetype = (e, infotype) => {
    e.preventDefault()
    if (infotype == "movie") {
      settype("movie")
      document.getElementById("movie").classList.add("active")
      document.getElementById("tv").classList.remove("active")
      setsearch("")
    } if (infotype == "tv") {
      settype("tv")
      document.getElementById("tv").classList.add("active")
      document.getElementById("movie").classList.remove("active")
      setsearch("")
    }
  }
  return (
    <div>
      <div className='Search'>
        <div className="input">
          <input type="seach" value={search} placeholder='Seacrh here' onChange={(e) => { setsearch(e.target.value) }} />
          <div className="botton-section">
            <h1>Plese select the type</h1>
            <div className="type">
              <a id='movie' href="" className='active' onClick={(e) => { changetype(e, "movie") }}>Movies</a>
              <a href="" id='tv' onClick={(e) => { changetype(e, "tv") }}>Tv Shows</a>
            </div>
          </div>
        </div>
        <div className="heading">
          <h1 >Search</h1>
        </div>
        <div className="Search-section">
          {/* Mapping data for search page */}
          {
            searchData && searchData.map(movie => (
              <div key={movie?.id}>
                <Card detid={movie?.id} desc={movie ? movie?.overview?.slice(0, 300) : ""} title={movie ? movie?.original_title || movie.name : ""} image={`https://image.tmdb.org/t/p/original${movie && movie?.poster_path}`} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Popular
