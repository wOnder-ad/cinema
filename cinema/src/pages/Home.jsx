import { movies } from "../data/movies.js";
import MovieList from "../components/MovieList.jsx";
import "../App.css";

function Home() {
  return (
    <div className="app">
      <h1>🎬 Now Showing</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
