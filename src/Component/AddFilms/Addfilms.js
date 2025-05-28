import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { House } from "lucide-react";
import { Link } from "react-router-dom";
function Addfilms() {
  const [film, setFilm] = useState({
    title: "",
    director: "",
    shortDescription: "",
    posterUrl: "",
    releaseYear: "",
    category: "",
    rating: "",
    language: "",
  });

  const addfilm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`https://filmi-world-backend-1.onrender.com/films`, {
        title: film.title,
        director: film.director,
        shortDescription: film.shortDescription,
        poster: film.posterUrl,
        releaseYear: film.releaseYear,
        Category: film.category,
        rating: film.rating,
        language: film.language,
        language: film.language,
      });
      console.log(response.data);

      toast.success("Film added successfully");
      setFilm({
        title: "",
        director: "",
        shortDescription: "",
        posterUrl: "",
        releaseYear: "",
        category: "",
        rating: "",
        language: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="relative">
      <h1 className="text-2xl font-bold text-center mt-7">AddFilms</h1>
      <div className="absolute top-0 left-10  ">
        <Link to="/">
          <House size={48} />
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center h-screen -mt-10">
          <form className="flex flex-col gap-4">
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              placeholder="Title"
              name="title"
              value={film.title}
              onChange={(e) =>
                setFilm({ ...film, [e.target.name]: e.target.value })
              }
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              name="director"
              placeholder="Director"
              value={film.director}
              onChange={(e) =>
                setFilm({ ...film, [e.target.name]: e.target.value })
              }
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              name="shortDescription"
              placeholder="shortDescription"
              value={film.shortDescription}
              onChange={(e) =>
                setFilm({ ...film, [e.target.name]: e.target.value })
              }
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              name="posterUrl"
              placeholder="Poster URL"
              value={film.posterUrl}
              onChange={(e) =>
                setFilm({ ...film, [e.target.name]: e.target.value })
              }
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="number"
              placeholder="Release Year"
              name="releaseYear"
              value={film.releaseYear}
              onChange={(e) =>
                setFilm({ ...film, [e.target.name]: e.target.value })
              }
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              placeholder="Category"
              name="category"
              value={film.category}
              onChange={(e) =>
                setFilm({ ...film, [e.target.name]: e.target.value })
              }
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="number"
              placeholder="Rating"
              name="rating"
              value={film.rating}
              onChange={(e) =>
                setFilm({ ...film, [e.target.name]: e.target.value })
              }
            />
            <input
              className="border border-black w-72 text-black text-xl py-1 px-4 rounded-sm"
              type="text"
              placeholder="Language"
              name="language"
              value={film.language}
              onChange={(e) =>
                setFilm({ ...film, [e.target.name]: e.target.value })
              }
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
