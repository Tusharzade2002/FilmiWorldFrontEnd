import React from "react";
import "./FilmsCard.css";
import axios from "axios";
import starIcon from "../../assects/star.png" 
import { useNavigate } from "react-router-dom";
function FilmCard({
  _id,
  title,
  director,
  shortDescription,
  poster,
  releaseYear,
  Category,
  rating,
  Language,
}) {
  const navigate = useNavigate();
  const deleteFilm = async() => { 
 const response = await axios.delete(`https://filmi-world-backend-1.onrender.com/films/${_id}`);
   console.log(`Film with ID ${_id} deleted successfully`);
    window.location.reload();    
  };
  return (
    <div className="border border-black m-4 rounded-lg h-40 flex relative gap-2">
      <div className="w-36 p-1 ">
        <img className="rounded-sm h-full" src={poster} alt={title} />
      </div>
      <div className="flex p-2 flex-col justify-between">
        <p>
          <span className="font-bold">Title:{title}</span>
        </p>
        <div>
          <span className="font-bold me-3">Director: {director}</span>
          <span className="font-bold">Release Year: {releaseYear}</span>
        </div>
      <div className="flex">
        <p className="me-3">Category : {Category}</p>
        <p>Language : {Language}</p>
        </div>
       <div className="flex absolute top-0 right-3 p-2">
        <img className="h-5 w-5" src={starIcon} alt="rating" />
        {rating}
       </div>
         <div>Short Description :{shortDescription}</div>
 <div className="absolute bottom-2 right-2">
  <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={()=>deleteFilm()}>Delete</button>
  <button className="bg-blue-500 text-white px-2 py-1 rounded ms-2" onClick={()=>{navigate(`/films/edit/${_id}`)}}>Edit</button>
 </div>
      </div>
    </div>
  );
}

export default FilmCard;
