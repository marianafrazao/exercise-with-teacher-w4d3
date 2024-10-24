function Movie (props) {
  return (
    <div>
      <div key={props.movieDetails.id} className="card">
        <img src={props.movieDetails.imgURL} />
        <h3>{props.movieDetails.title}</h3>
        <p>Year: {props.movieDetails.year}</p>
        <p>Rating: {props.movieDetails.rating}</p>

        <p>
          <button onClick={() => props.callbackToDelete(props.movieDetails.id)}>
            Delete this movie
          </button>
        </p>
      </div>
    </div>
  );
}

export default Movie



