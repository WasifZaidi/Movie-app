import React from 'react'
import "./Css/Detailsheader.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Detailsheader = ({data}) => {
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
                      <div className="poster">
                      <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${data && data.backdrop_path}`} />
                        </div>
                        <div className="posterImage__overlay">

                        </div>
                      </div>
        </Carousel>
    </div>
</>
  )
}
export default Detailsheader
