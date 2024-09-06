import React from 'react'
import MainCard from './MainCard';
import SmallCard from './SmallCard';
import '../Components/style.css';


const NewsPage = ({news}) => {
    
    console.log(news);
    const [first,...rest]=news;
    console.log("rest",rest);
  return (
    <div className=''>

        {
            news.length>0 ?<div>
                <MainCard news={first}/>
            </div>:<div className='errormessage'>No related news Found!!!</div>
        }

        {
            rest.length>0 && rest.map((val, ind)=>{
                return<SmallCard news={rest[ind]}/>
            })
        }

        

        {/* {news.length>0 ? <div>
            {
                news.map((val, ind)=>{
                    return <div key={ind}>

                     
                        <img src={val.urlToImage} alt=""/>

                    </div>
                })
            }
        
        </div>:<div>There is nothing to show</div>} */}

      
    </div>
  )
}

export default NewsPage
