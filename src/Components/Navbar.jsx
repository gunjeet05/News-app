import '../Components/style.css'

import { Link ,useNavigate} from 'react-router-dom'
import React, { useState } from 'react'

const Navbar = () => {
  const navigate=useNavigate();
  const [data, setData]=useState();
  const handleChange=(e)=>{
    console.log(data, "here");
    setData(e.target.value);
  }

  const handleSubmit=(e)=>{
    try{
      e.preventDefault();
    navigate(`/search?q=${data}`)
    }
    catch(err){
      navigate('/error');
      console.log(err);

    }
    
  }
  return (
    <header className='main-nav'>
      <Link className='link' to={"/"}>
      
      <p className='header-text'>
            <span className='span-text'>Taaza</span>Khabar
        </p>
      </Link>
        
        <form onSubmit={handleSubmit}>
        
        <input type="text" placeholder='Search...' className='search' onChange={handleChange} required/>
        </form>
        
        <ul className='flex'>
          
        <li><Link className='link' to={'/search/?category=sports'}>
          Sports
          </Link></li>
          <li><Link className='link' to={'/search/?category=technology'}>
          Technology
          </Link></li>
          <li><Link className='link' to={'/search/?category=business'}>
          Business
          </Link></li>
          <li><Link className='link' to={'/search/?category=entertainment'}>
          Entertainment
          </Link></li>

          <li><Link className='link' to={'/search/?category=health'}>
          Health
          </Link></li>

        
        </ul>

      
    </header>
  )
}

export default Navbar
