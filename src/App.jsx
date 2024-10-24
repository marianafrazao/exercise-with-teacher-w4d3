import Header from "./components/Header"
import { useState } from "react";
import MovieList from "./components/MovieList"
import Footer from "./components/Footer"

import movies from "./data/movies.json"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  return (
    <>
      <Header moviesToDisplay={moviesToDisplay}/>
      <MovieList moviesToDisplay={moviesToDisplay} setMoviesToDisplay={setMoviesToDisplay}/>
      <Footer />
    </>
  )
}

export default App
