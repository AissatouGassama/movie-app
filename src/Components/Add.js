import React, {useState} from 'react'
import { Datas } from './Datas'
import '../App.css'
import MovieCard from './MovieCard'
export default function Add() {
   
  const [title, setTitle]= useState('')
  const [description, setDescription]=useState('')
  const[posterURL, setPosterURL]=useState('')
  const[rating, setRating]=useState('')
  
  console.log(rating)


  const submit=()=>{
    return Datas.push(... {title, description, posterURL, rating });

    
  }

    
  return (

    <div>
        
    <form className='carte' >
    <div className="mb-3">
    <input type="text" class="form-control" id="exampleTitle" aria-describedby="titre" placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" id="" aria-describedby="desc" placeholder='Description' onChange={(e)=>setDescription(e.target.value)}/>
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" id="" aria-describedby="" placeholder='posterURL'
    onChange={(e)=>setPosterURL(e.target.value)}/>
    </div>
    <div className="mb-3">
    <input type="text" className="form-control" id="" aria-describedby="" placeholder='rating'
    onChange={(e)=>setRating(e.target.value)}/>
    </div>
  </form>
  <button type="submit" className="btn btn-primary" onClick={submit}>Submit</button>
  <MovieCard
  title={title}
  des={description}
  poster={posterURL}
  eval={rating}

  />
    </div>

  )
}
