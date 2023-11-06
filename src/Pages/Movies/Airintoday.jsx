import React from 'react'
import "../Css/Main.css"
import Header from '../../Components/Header'
import { Context } from '../../utils/context'
import { useContext } from 'react'
import { useEffect, useState } from 'react'
import Card from "../../Components/Card"
const Airing = () => {
  const { gettingdata, setgettingdat } = useContext(Context)
  const {resposivetitleheader, setresposivetitleheader} = useContext(Context)
  useEffect(()=>{
   setresposivetitleheader("Today  #1")
  },[])
  return (
    <div>
      <Header data={gettingdata} />
      <div className='Page'>
        <div className="heading">
          <h1>Airing Today</h1>
        </div>
        <div className="Page-section">
          {/* Maping data for Airing-today */}
          {
            gettingdata && gettingdata.map(movie => (
              <div key={movie?.id}>
              <Card key={movie?.id} detid = {movie?.id} desc = {movie ? movie?.overview?.slice(0, 300) : ""} title = {movie ? movie?.original_title || movie.name : ""} image = {`https://image.tmdb.org/t/p/original${movie && movie?.poster_path}` || "https://picturesofmaidenhead.files.wordpress.com/2019/01/image-not-found.jpg?w=1620"}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default  Airing
