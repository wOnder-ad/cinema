import { useParams, useNavigate } from "react-router-dom";
import CinemaHall from "../components/CinemaHall.jsx";
import { movies } from "../data/movies.js";

function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <p>Фільм не знайдено</p>;

  return (
    <div>
      <h1>Бронювання</h1>
      <h1>{movie.title}</h1>
      <h2>Час сеансу: {movie.showtime}</h2>
      <CinemaHall />
      <button className="home-button" onClick={() => navigate("/")}>
        На головну
      </button>
    </div>
  );
}

export default Booking;
