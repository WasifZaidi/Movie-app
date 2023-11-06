import React from 'react'
import "./Css/Header.css"
import header from "../img/header.jpg"
import { useEffect, useState } from 'react'
import { Context } from '../utils/context'
import { useContext } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
const Header = ({data}) => {
  const { gettingdata, setgettingdat } = useContext(Context)
  const {videotitle, setvideotitle} = useContext(Context)
  const {resposivetitleheader, setresposivetitleheader} = useContext(Context)
  return (
    <>
    <div className="poster">
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            showIndicators ={false}
        >
          {/* Mapping data for Header */}
            {
                data.map(movie => (
                    <Link key={movie?.id}  onClick={()=>{ setvideotitle(movie ? movie.original_title || movie.original_name: "")}} style={{textDecoration:"none",color:"white"}} to={`/Details/${movie.id}`} >
                      <div  className="poster">
                      <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie ? movie.original_title || movie.original_name: ""}</div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date : ""}
                                <span className="posterImage__rating">
                                    {movie ? movie.vote_average :""}
                                    <i className="fas fa-star" />{" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                        </div>
                      </div>
                    </Link>
                    
                ))
            }
        </Carousel>

    </div>
    <div className="res-text">
      <h1>{resposivetitleheader}</h1>
    {
      gettingdata.slice(0,1).map(movie=>(
       <div className=""  key={movie?.id} >
          <h2>{movie ? movie.original_title: ""}</h2>
      <p>{movie ? movie.overview : ""}</p>
      </div>
      ))
    }
    </div>
</>
  )
}
export default Header
