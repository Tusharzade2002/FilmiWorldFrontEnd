import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import FilmCard from "../../Component/FilmsCard/FilmCard.js";
import AddImage from "../../assects/image-gallery.png";
import { Link } from "react-router-dom";
// import AddImage from '../../assects/image.png'
function Home() {
  const [Films, SetFilms] = useState([]);
  const LoadFilms = async () => {
    try {
      const response = await axios.get(`http://localhost:5006/films`);
      SetFilms(response?.data?.data);
      console.log(response.data.data);

      toast.success(response?.data?.message);
    } catch (e) {
      toast.success(e.message);
    }
  };
  useEffect(() => {
    LoadFilms();
  }, []);
  return (
    <div className="mainhome-conatiner">
      Home
      {Films.map((film, index) => {
        const {
          _id,
          title,
          shortDescription,
          director,
          poster,
          releaseYear,
          Category,
          rating,
          Language,
        } = film;
        return (
          <FilmCard
            key={index}
            poster={poster}
            shortDescription={shortDescription}
            title={title}
            releaseYear={releaseYear}
            rating={rating}
            Language={Language} 
            Category={Category}
            director={director}
            _id={_id}
          />
        );
      })}
      <Toaster />
      <Link to="/add-film">
        {" "}
        <img className="addimage-icon" src={AddImage} />{" "}
      </Link>
    </div>
  );
}

export default Home;
