import React from 'react'
import  '../App'
import '../App.css'
//import MovieList from './MovieList'

export default function MovieCard(props) {
  return (
    <div>
        <h2>{props.title}</h2>
        <p>{props.des}</p>
        <img src={props.poster} alt={props.title}  className='img'/>
        <h3>{props.eval}</h3>

    </div>

  )
}
