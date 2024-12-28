import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import FilmCard from '../../Component/FilmsCard/FilmCard.js'
// import AddImage from '../../assects/image.png'
function Home() {
 const [Films ,SetFilms]=useState([]);
    const LoadFilms = async()=>{
        try{
             const response = await axios.get(`http://localhost:5006/films`);
             SetFilms(response?.data?.data);   
             console.log(response.data.data);
             
             toast.success(response?.data?.message)
        }
        catch(e){
            toast.success(e.message)
        }  
    }
    useEffect(()=>{
          LoadFilms();
    },[])
  return (
    <div>
                    Home
        {
            Films.map((film ,index)=>{
                  const {
                    _id,
                    title,
                    director,
                    poster,
                    releaseYear,
                    Category,
                    rating,
                    Language
                  }  = film;
                  return <FilmCard key={index} title={title} releaseYear={releaseYear}  />
            })
        }
              <Toaster/>
            
    </div>
  )
}

export default Home