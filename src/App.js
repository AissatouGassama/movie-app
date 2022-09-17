import React, {useState} from 'react';
import './App.css';
import Add from './Components/Add';
import MovieCard from './Components/MovieCard';
import MovieList from './Components/MovieList';
import Search from './Components/Search';




function App(props) {

  
  return (
    <div className="App">
      
           <Search/> 
          

        <MovieList />
        <Add/>
        
        

      

  </div>
  );
}

export default App;
