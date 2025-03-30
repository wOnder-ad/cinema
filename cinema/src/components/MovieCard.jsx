const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <img src={movie.poster} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Showtime:</strong> {movie.showtime}</p>
      </div>
    );
  };
  
  export default MovieCard;
  