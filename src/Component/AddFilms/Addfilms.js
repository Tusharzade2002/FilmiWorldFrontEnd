import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Addfilms() {
  const [film, setFilm] = useState({
    title: "",
    director: "",
    posterUrl: "",
    releaseYear: "",
    category: "",
    rating: "",
    language: "",
  });

  const addfilm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5006/films", {
        title: film.title,
        director: film.director,
        poster: film.posterUrl,
        releaseYear: film.releaseYear,
        Category: film.category,
        rating: film.rating,
      });
      toast.success("Film added successfully");
      setFilm({
        title: "",
        director: "",
        posterUrl: "",
        releaseYear: "",
        category: "",
        rating: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-7">AddFilms</h1>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center h-screen -mt-10">
          <form className="flex flex-col gap-4">
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              placeholder="Title"
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              placeholder="Director"
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              placeholder="Poster URL"
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="number"
              placeholder="Release Year"
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              placeholder="Category"
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="number"
              placeholder="Rating"
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              placeholder="Language"
            />
            <button
              className="bg-blue-500 w-36 ms-16 text-white rounded-sm p-2"
              type="submit"
              onClick={addfilm}
            >
              Add Film
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Addfilms;
