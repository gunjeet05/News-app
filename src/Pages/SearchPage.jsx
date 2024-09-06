import React, { useEffect, useState } from 'react'
import NewsPage from '../Components/NewsPage';
import { useLocation, useNavigate } from 'react-router';

const SearchPage = () => {
const location=useLocation();
const url=new URLSearchParams(location.search);

const newURL=url.toString();
console.log(url.toString());

const navigate=useNavigate();

const[news, setNews]=useState([]);
const fetchData=async(url)=>{
    try{
        
        console.log(url);
        const res=await fetch(`https://newsapi.org/v2/top-headlines?${newURL}&apiKey=1f31919f16ca494aa4810bf836b48401`)
        if(res.status=='error'){
            navigate('/error');
        }
        const data=await res.json();

        console.log(data);
        setNews(data.articles);
        
    }
    catch(err){
        navigate('/error');
        console.log("Error occured in loading the data",err);
        return [];
    }



}

useEffect(()=>{
    console.log("Fetch data")
    fetchData();
},[location.search])


  return (
    <div>
        <NewsPage news={news}/>

      
    </div>
  )
}

export default SearchPage
