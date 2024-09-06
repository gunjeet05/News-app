import React from 'react'
import '../Styles/style.css'
import { useNavigate } from 'react-router'




const ErrorPage = () => {
    const navigate=useNavigate();
    setTimeout(()=>{
        navigate('/');

    },10000)
  return (
    <div className='err'>
        <p className='main-text'>
            Some error occured
        </p>
        <p>
            Possible Reason
        </p>
        <p>
            1.Check your internet Connection.
        </p>
        <p>
            2.Daily limit of data fetching from backend is exceeded.
        </p>
      
    </div>
  )
}

export default ErrorPage
