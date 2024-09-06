import React from 'react'
import '../Styles/style.css'
import { Link } from 'react-router-dom'
const SmallCard = ({news}) => {
  return (
    <Link className='news-link' to={news.url}>
        {news.description && 
        <div className='sm-news'>
             <p className='desc'>
            {news.description}
        </p>
        <img className='sec-img' src={news.urlToImage?news.urlToImage:'/news.jpg'} alt="newsImage" />

        </div>
        }
       

      
    </Link>
  )
}

export default SmallCard
