
import './App.css';
import Popular from './Pages/Movies/popular';
import Upcoming from './Pages/Movies/Upcoming';
import Toprated from './Pages/Movies/toprated';
import Navbar from './Components/Navbar';
import AppContext from './utils/context';
import Details from './Pages/Movies/Details';
import Search from './Pages/Movies/Search';
import Airing from './Pages/Movies/Airintoday';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <AppContext>
      <Router>
      <AppContext>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Popular />}/>
          <Route path='/Upcoming' element={<Upcoming />}/>
          <Route path='/topRated' element={<Toprated />}/>
          <Route path='/Airing' element = {<Airing/>} />
          <Route path='/Details/:id' element={<Details />}/>
          <Route path='/Search' element ={<Search/>} />
        </Routes>
      </AppContext>
    </Router>
      </AppContext>
    </div>
  );
}

export default App;
