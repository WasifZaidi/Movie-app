import React, { useContext } from 'react'
import "./Css/Navbar.css"
import navbarimg from "../img/popcorn.png"
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi"
import { Context } from '../utils/context'
const Navbar = () => {
    const { category, setcategory } = useContext(Context)
    const { search, setsearch } = useContext(Context)
    const { type, settype } = useContext(Context)
    const { title, settitle } = useContext(Context)

    //Changing the type and category and opening the bottom section
    const opentype = (e, type) => {
        e.preventDefault()
        document.getElementById('bottom').style.display = "flex"
        if (type == "Movies") {
            document.getElementById("title").innerHTML = "Movies"
            document.getElementById("movies-links").style.display = "flex"
            document.getElementById("tv-links").style.display = "none"
            settype("movie")
            setcategory("popular")
        }
        if (type == "Tv_Shows") {
            document.getElementById("title").innerHTML = "Tv Shows"
            document.getElementById("tv-links").style.display = "flex"
            document.getElementById("movies-links").style.display = "none"
            settype("tv")
            setcategory("airing_today")
        }
    }
    //Closing the botton navbar section
    const closenavbarfunctionpc = () => {
        document.getElementById("bottom").style.display = "none"
    }
    //Opening the responsive navbar
    const opennavbar = (type) => {
        if (type == "ipad") {
            document.getElementById("res-navbar").style.width = "60%"
            document.getElementById("res-navbar").style.visibility = "visible"
        } if (type == "mobile") {
            document.getElementById("res-navbar").style.width = "100%"
            document.getElementById("res-navbar").style.visibility = "visible"
        }
    }
    //Closing the responsive navbar
    const closenavbar = () => {
        document.getElementById("res-navbar").style.width = "0%"
        document.getElementById("res-navbar").style.visibility = "hidden"
    }

    return (
        <>
            <div className="Navbar">
                <div className="top">
                    <div className="left">
                        <div className="logo">
                            <h1>FunShow</h1>
                        </div>
                       {/* Links for top-section of navbar and changing type and category */}
                        <div className="links">
                            <Link onClick={()=>{closenavbarfunctionpc() }} to="/">Home</Link>
                            <Link to="/" onClick={(e) => { opentype(e, "Movies") }} >Movies</Link>
                            <Link to="/" onClick={(e) => { opentype(e, "Tv_Shows") }} >Tv Shows</Link>
                        </div>
                    </div>
                    <div className="right">
                        <Link to="/Search" className='btn'>Seacrh Now</Link>
                        <GiHamburgerMenu onClick={() => { opennavbar("ipad") }} className='menu ipad' />
                        <GiHamburgerMenu onClick={() => { opennavbar("mobile") }} className='menu mobile' />
                    </div>
                </div>
                     {/* Links for bottom-section of navbar and only changing  category */}
                <div id='bottom' className="bottom">
                    <div className="bottom-section">
                        <div className="content">
                            <h1 id='title'>Movies</h1>
                            <div id='movies-links' className="links">
                                <Link onClick={() => { setcategory("popular"); closenavbarfunctionpc() }} to="/">Popular</Link>
                                <Link onClick={() => { setcategory("upcoming"); closenavbarfunctionpc() }} to="/Upcoming">Upcoming</Link>
                                <Link onClick={() => { setcategory("top_rated"); closenavbarfunctionpc() }} to="/topRated">Top Rated</Link>
                            </div>
                            <div id='tv-links' className="links">
                                <Link onClick={() => { setcategory("airing_today"); closenavbarfunctionpc() }} to="/Airing">Airing Today</Link>
                                <Link onClick={() => { setcategory("popular"); closenavbarfunctionpc() }} to="/">Popular</Link>
                                <Link onClick={() => { setcategory("top_rated"); closenavbarfunctionpc() }} to="/topRated">Top Rated</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Res-navbar -section for devices under 1000px */}
            <div id='res-navbar' className="res-navbar">
                <div className="heading">
                    <h1>Navigation</h1>
                    <b><GiHamburgerMenu onClick={() => { closenavbar() }} className='menu' /></b>
                </div>    
             {/* Links for res-navbar  and changing type into movies and category */}
                <div className="links">
                    <div className="section">
                        <h1>Movies</h1>
                        <div className="links-section">
                            <Link onClick={() => { settype("movie"); setcategory("popular"); closenavbar() }} to="/">Popular</Link>
                            <Link onClick={() => { settype("movie"); setcategory("upcoming"); closenavbar() }} to="/Upcoming">Upcoming</Link>
                            <Link onClick={() => { settype("movie"); setcategory("top_rated"); closenavbar() }} to="/topRated">Top Rated</Link>
                        </div>
                    </div>
             {/* Links for res-navbar and changing type into tv and category */}
                    <div className="section">
                        <h1>Tv Serise</h1>
                        <div className="links-section">
                            <Link onClick={() => { settype("tv"); setcategory("airing_today"); closenavbar() }} to="/Airing">Airing Today</Link>
                            <Link onClick={() => { settype("tv"); setcategory("popular"); closenavbar() }} to="/">Popular</Link>
                            <Link onClick={() => { settype("tv"); setcategory("top_rated"); closenavbar() }} to="/topRated">Top Rated</Link>
                        </div>
                    </div>
                    <div className="search">
                        <Link onClick={() => { closenavbar() }} to="/Search" className='btn'>Seacrh Now</Link>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Navbar
