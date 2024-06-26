import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

// e5af35ff

const API_URL = 'https://www.omdbapi.com?apikey=e5af35ff';

const App = () => {

    const [movies, setMovies] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('avengers');
    }, []);

    return (
        <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
            <input 
                placeholder="Search for a movie"
                value={searchTerm}
                onChange ={(e) => setSearchTerm(e.target.value)}
            />
            <img src = {SearchIcon} alt = 'Search' onClick={() => searchMovies(searchTerm)} />
        </div>

        {
            movies?.length > 0
            ?(
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) :
            (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }

        
        </div>
    );
    }

    export default App;