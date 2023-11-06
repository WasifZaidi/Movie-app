import React, { useEffect, useState } from 'react'
import "./Css/Card.css"
import check from "../img/ser-1.jpg"
import { MdVideoLibrary } from "react-icons/md"
import { useContext } from 'react'
import { Context } from '../utils/context'
import { Link } from 'react-router-dom'
const Card = ({ image, title, desc, id, detid }) => {
  const { checklength, sethecklength } = useContext(Context)
  const { videotitle, setvideotitle } = useContext(Context)

  //Opening responsive text section
  const seerestext = (e) => {
    e.preventDefault()
    document.getElementById(detid).style.display = "flex"
  }
  //Checking the titie length and giving title true or false value so we can change the fontsize of title in details page
  const sometitlework = () => {
    if (title?.length >= 16) {
      sethecklength(true)
      setvideotitle(title)
    } else {
      sethecklength(false)
      setvideotitle(title)
    }
  }

  return (
    <Link onClick={sometitlework} to={`/Details/${detid}`}>
      <div className='Card'>
        <div className="img">
          <img src={image || "https://th.bing.com/th/id/R.002f5facdd6a1679fe236242c9c37c7f?rik=su1H1VpLJtPJAg&pid=ImgRaw&r=0"} alt="" />
        </div>
        <div id='text' className="text">
          <button>
            <MdVideoLibrary />
          </button>
        </div>
        <a onClick={seerestext} className='seemore' href="">See More</a>
        <div id={detid} className="res-text">
          <h1 >{title}</h1>
          <p>{desc}...</p>
          <Link to={`/Details/${detid}`}>More</Link>
        </div>
      </div>
    </Link>
  )
}
export default Card
