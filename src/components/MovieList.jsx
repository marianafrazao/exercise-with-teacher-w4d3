import { useState } from 'react';
import movies from "../data/movies.json";
import Movie from './Movie';

function MovieList(){

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newArray = moviesToDisplay.filter( movieObj => {
            if (movieObj.id === movieId){
                return false;
            } else {
                return true;
            }
        });
        setMoviesToDisplay(newArray);
    }

    return (
        <section className="MovieList">

            <h2>We currently have {moviesToDisplay.length} movies available</h2>

        <h1>List of movies:</h1>

        {moviesToDisplay.map((movieObj) => {
            return (
                <Movie movieDetails={movieObj} callbackToDelete={deleteMovie}/>
            )
        })}

        </section>
    )
}

export default MovieList;