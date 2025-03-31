import { useParams } from "react-router-dom";
import CinemaHall from "../components/CinemaHall";
import movies from "../data/movies";

function Booking() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) return <p>Фільм не знайдено</p>;

  return (
    <div>
      <h1>Бронювання: {movie.title}</h1>
      <CinemaHall />
    </div>
  );
}

export default Booking;
