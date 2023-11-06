import React, { useContext, useState } from 'react'
import "../Css/Details.css"
import { useEffect } from 'react'
import { Context } from '../../utils/context'
import {MdVideoLibrary} from "react-icons/md"
import Detailsheader from '../../Components/Detailsheader'
import { useParams } from "react-router-dom"
const Details = () => {
    const { Detailss, setDetails } = useContext(Context)
    const {checklength, sethecklength} = useContext(Context)
    const {titlesize, settitlesize} = useContext(Context)
    const {type, settype} = useContext(Context)
    const {video, setvideo} = useContext(Context)
    const {videoimg, setvideoimg} = useContext(Context)
    const { id } = useParams()

    //Fetchind data and giving it to Details state
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=4c6e4ce791a84f0179c4430a3a414b2f&language=en-US`)
            .then(res => res.json())
            .then(data => setDetails(data))
            checklenght2()
    }, [type])

 //Checking Length of movie title and decideing the size of title
    const checklenght2 = ()=>{
        if(checklength == true){
         settitlesize("2vw")
        }else{
        settitlesize("4vw")
        }
    }
    return (
        <div className='Details'>
               <Detailsheader data = {Detailss}/>   
               <div className="Details-section">
                <div className="Left">
                <img src={`https://image.tmdb.org/t/p/original${Detailss ? Detailss.backdrop_path : ""}`} alt="" />
                </div>
                <div className="right">
                    <div className="details">
                    <h1 style={{fontSize: `${titlesize}`}}>{Detailss ? Detailss.original_title || Detailss.name || Detailss?.last_episode_to_air?.name: ""}</h1>
                        <h1 className='res-heading'>{Detailss ? Detailss.original_title : ""}</h1>
                        <b>{Detailss ? Detailss.tagline : ""}</b>
                        <p>{Detailss ? Detailss.overview : ""}</p>
                    </div>
                       <div className="more-det">
                       <div className="det">
                        <p>Rating</p>
                        <p>{Detailss.vote_average}</p>
                        </div>
                        <div className="det">
                            <p>Revenue</p>
                            <p>{Detailss.revenue || "No Data "}</p>
                        </div>
                        <div className="det">
                       <p>Language</p>
                       <p>{Detailss.original_language}</p>
                        </div>
                       </div>
                      <div className="watch">
                        <a href={video} target='_blank' onClick={()=> {console.log(video)}}><MdVideoLibrary className='icon'/>Watch Trailer</a>
                    </div> 
                    </div>
               </div>
               <div className="Production-companies">
               <div className="heading">
                    <h1>Videos & Trailers</h1>
                </div>
               <div className="Section">
                {/* Mapping data for videoimg */}
               {
               videoimg &&  videoimg.slice(0,3).map(movie=>(
                    <div className="card">
                    <img src={movie.thumbnail} alt="" />
                </div>
                ))
               }
               </div>
              </div>
        </div>
    )
}

export default Details
