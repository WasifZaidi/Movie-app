
import axios from "axios";
import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { useRef } from "react";
export const Context = createContext();
const AppContext = ({ children }) => {
const [Detailss, setDetails] = useState([])
const [checklength, sethecklength] = useState(false)
const [titlesize, settitlesize] = useState("4vw")
const [gettingdata, setgettingdata] = useState([])
const [search, setsearch] = useState("")
const [searchData, setsearchData] = useState([])
const [type, settype] = useState("movie")
const [category, setcategory] = useState("popular")
const [videotitle, setvideotitle] = useState("")
const [video, setvideo] = useState("heyy")
const [videoimg, setvideoimg] = useState([])
const  [resposivetitleheader, setresposivetitleheader] = useState("Trending #1")

// fetching data and giving it to state
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${type}/${category}?api_key=4c6e4ce791a84f0179c4430a3a414b2f&language=en-US`)
    .then(res => res.json())
    .then(data => setgettingdata(data.results))
}, [category])

// fetching data for Searh page and giving it to state
const gettingsearchdata = ()=>{
    fetch(`https://api.themoviedb.org/3/search/${type}?api_key=4c6e4ce791a84f0179c4430a3a414b2f&query=${search}`)
    .then(res => res.json())
    .then(data => setgettingdata(data.results))
}
// fetching-data-for-Video-Link-trailers & Videos and giving it to state
const options = {
    method: 'GET',
    url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/',
    params: {q: `${videotitle}`},
    headers: {
      'X-RapidAPI-Key': '0e775d8486msh95cee93bbbbf341p1a5e38jsn6a71f430064e',
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
  };
useEffect(()=>{
    vidoesfunction()
},[videotitle, video])
//function for fetching data for trailers & Videos
const vidoesfunction = async()=>{
    try {
        const response = await axios.request(options);
        setvideo(response?.data?.videos[0]?.link);
        setvideoimg(response?.data?.videos)
    } catch (error) {
        console.error(error);
    }
}
    return (
        <Context.Provider
            value={{
           category,
           setcategory,
           gettingdata,
           videotitle,
           setvideotitle,
           setgettingdata,
           videoimg,
           setvideoimg,
           search,
           setsearch,
           searchData,
           setsearchData,
           video,
           setvideo,
            Detailss,
            setDetails,
            checklength,
            sethecklength,
            titlesize,
             settitlesize,
             type,
            settype,
            gettingsearchdata,
            resposivetitleheader,
            setresposivetitleheader,
            }}
        >
            {children}
        </Context.Provider>
    )
}
export default AppContext