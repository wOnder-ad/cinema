import { Link } from "react-router-dom";

function MovieCard ({ movie }) {
    return (
      <div className="movie-card">
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p><strong>Description:</strong> {movie.description}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Showtime:</strong> {movie.showtime}</p>
        <div className="card-footer">
          <Link to={`/booking/${movie.id}`}>
            <button className="booking-button">Reserve</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  