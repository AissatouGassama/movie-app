import React from 'react'
import MovieCard from './MovieCard'
import App from '../App'
import { Datas } from './Datas'
import '../App.css' 


export default function (props) {
  
  return (
    <div >
    
    <div className='parent' >
   
   {
    
      Datas.map((movie,index)=>( 
        <MovieCard 
        key = {index}
          title = {movie.title}
          des={movie.description} 
          poster={movie.posterURL}
          eval={movie.rating}
        />
      ))
   }
   
   </div>
   
    </div>
  )
}
