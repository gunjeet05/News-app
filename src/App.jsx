
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import Navbar from './Components/Navbar';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home';
import SearchPage from './Pages/SearchPage';
import ErrorPage from './Pages/ErrorPage';

function App() {
  
   return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/error' element={<ErrorPage/>}/> 

        
      </Routes>
    </Router>  
  )
      
  
}

export default App
