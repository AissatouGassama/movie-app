
import React, { useState } from 'react'
import { Datas } from './Datas'
import MovieCard from './MovieCard'
import '../App.css'

export default function Search() {
  const[recherche,setRecherche]=useState('')
  console.log(recherche)
  return (
    <div >

        <div className='rechercher'>
       <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setRecherche(e.target.value)}/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      {
        Datas
        .filter((val)=>{ 
          if(recherche==""){
            return null;
          }else if(val.title.toLowerCase().includes(recherche.toLowerCase())){
            return val;

          }
        }
        ).map((movie, index)=>(
          
          <MovieCard 
        key = {index}
          title = {movie.title}
          //des={movie.description} 
          poster={movie.posterURL}
          eval={movie.rating}
        />
        ))
      }
      
      </div>

      
    </div>
  )
}
