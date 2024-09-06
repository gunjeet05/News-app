import React, { useEffect, useState } from 'react'
import NewsPage from '../Components/NewsPage';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styles/style.css'

const Home = () => {
    const navigate=useNavigate();
    const[sports, setSports]=useState([]);
    const[Technology, setTech]=useState([]);
    const[Business, setBusiness]=useState([]);
    const[Entertainment, setEntertainment]=useState([]);
    const[health, setHealth]=useState([]);
    const fetchData=async(url)=>{
        try{
            if(!url){
                url="country=us"
            }
            console.log(url);
            const res=await fetch(`https://newsapi.org/v2/top-headlines?pagesize=10&${url}&apiKey=1f31919f16ca494aa4810bf836b48401`)
            const data=await res.json();
            console.log("url",data.articles);
            return data.articles;
            
        }
        catch(err){
            navigate('/error');
            console.log("Error occured in loading the data");
            
        }



    }

    const fetchAllData=async()=>{
        try{
        const sportsData=await fetchData("category=sports");
        setSports(sportsData)
        
        const techData=await fetchData("category=technology");
        setTech(techData);

        const businessData=await fetchData("category=business");
        setBusiness(businessData);

        const entData=await fetchData("category=entertainment");
        setEntertainment(entData);

        const healthData=await fetchData("category=health");
        setHealth(healthData);}
        catch(err){
            navigate('/error');

        }

    }
    
    useEffect(()=>{
        fetchAllData();

        


    },[])

  return (
    <div className='main'>

        <p className='heading-text'>
            Sports News
        </p>
        <NewsPage news={sports} />
        <Link className='newsItems' to={`/search?category=sports`}>
            See more Sports news...
        </Link>

        <p className='heading-text'>
            Technology news
        </p>
        <NewsPage news={Technology} />
        <Link className='newsItems' to={`/search?category=technology`}>
            See more Technology news...
        </Link>

        
       
        <p className='heading-text'>
            Health news
        </p>
        <NewsPage news={health} />
        <Link className='newsItems' to={`/search?category=health`}>
            See more health news...
        </Link>
        

       

        <p className='heading-text'>
            Business news
        </p>
        <NewsPage news={Business} />
        <Link className='newsItems' to={`/search?category=business`}>
            See more Business news...
        </Link>

        <p className='heading-text'>
            Entertainment news
        </p>
        <NewsPage news={Entertainment} />
        <Link className='newsItems' to={`/search?category=entertainment`}>
            See more Entertainment news...
        </Link>


      
    </div>
  )
}

export default Home
