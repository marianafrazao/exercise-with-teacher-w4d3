import Movie from "./Movie";

function MovieList(props) {

  const deleteMovie = (movieId) => {
    const newArray = props.moviesToDisplay.filter((movieObj) => {
      if (movieObj.id === movieId) {
        return false;
      } else {
        return true;
      }
    });
    props.setMoviesToDisplay(newArray);
  };

  return (
    <section className="MovieList">
      <h1>List of movies:</h1>

      {props.moviesToDisplay.map((movieObj) => {
        return <Movie movieDetails={movieObj} callbackToDelete={deleteMovie} />;
      })}
    </section>
  );
}

export default MovieList;
