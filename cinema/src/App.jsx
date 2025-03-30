import { movies } from "./data/movies";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🎬 Now Showing</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
