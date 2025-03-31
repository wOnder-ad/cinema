import { useState, useEffect } from "react";
import BookingService from "../services/BookingService.js";
import BookingForm from "./BookingForm.jsx";
import { useParams } from "react-router-dom";

const CinemaHall = () => {
  const { id: movieId } = useParams();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    setBookedSeats(BookingService.getBookedSeats(movieId));
  }, [movieId]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  return (
    <div>
      <div className="cinema-hall">
        {[...Array(30)].map((_, i) => {
          const seat = i + 1;
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);

          return (
            <div
              key={seat}
              className={`seat ${isBooked ? "booked" : isSelected ? "selected" : "available"}`}
              onClick={() => toggleSeat(seat)}
            >
              {seat}
            </div>
          );
        })}
      </div>

      {selectedSeats.length > 0 && (
        <BookingForm
          movieId={movieId}
          selectedSeats={selectedSeats}
          onBookingSuccess={() => setSelectedSeats([])}
        />
      )}
    </div>
  );
};

export default CinemaHall;
