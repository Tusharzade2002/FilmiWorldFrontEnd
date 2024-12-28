import React from 'react'
import './FilmsCard.css'
function FilmCard(  {_id,
         title,
         director,
         poster,
         releaseYear,
         Category,
         rating,
         Language}) {
  return (
    <div className='FilmsCards'>
           <h1>{title}</h1>
           <h3>{releaseYear}</h3>
    </div>
  )
}

export default FilmCard