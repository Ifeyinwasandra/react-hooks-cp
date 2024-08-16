import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      title: 'Titanic',
      description: 'James Cameron is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S.',
      posterURL: 'https://youtu.be/A1FtRovJMxk?si=SQE1kqvlB4FJBOBW',
      rating: 9.8
    },
    {
      title: 'Acrimony',
      description: 'A faithful wife tired of standing by her devious husband is enraged when it becomes clear.',
      posterURL: 'https://youtu.be/4afaagRxrKM?si=68tUIY54DOMuPcWq',
      rating: 8.0
    },
  ]);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const handleFilter = (filter) => {
    const { title, rating } = filter;
    let filteredMovies = movies;

    if (title) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filteredMovies = filteredMovies.filter(movie => 
        movie.rating >= rating
      );
    }

    setMovies(filteredMovies);
  };

  return (
    <div className="App">
      
      <h1>My Movie App</h1>
      <Filter onFilter={handleFilter} />
      <AddMovie onAdd={handleAddMovie} />
      <MovieList movies={movies} />
 </div>
);
}

export default App;