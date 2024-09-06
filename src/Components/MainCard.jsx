import React from 'react'
import "../Styles/style.css"
import { Link } from 'react-router-dom'
const MainCard = ({news}) => {
  return (
    <div className='main-div'>
        <p className='head-text'>
            {news.title}
        </p>
        <img className="main-img" src={news.urlToImage?news.urlToImage:'/news.jpg'} alt="Image" />
        <div>
            {news.author && <p className='small-text'>
                {news.author}
            </p>}

            {news.source.name && 
            <p className='small-text'>
                {news.source.name}    
            </p>}
        </div>

        {news.description ?  <p className='desc'>
            {news.description}
        </p>: <p className='desc'>
            {news.title}
        </p>}
       

        <Link className='blue-btn' to={news.url}>
                Read more...
        </Link>

      
    </div>
  )
}

export default MainCard
