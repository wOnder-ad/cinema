import { useState } from "react";

const rows = 5;
const cols = 8;

function CinemaHall() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, col) => {
    const seatId = `${row}-${col}`;
    setSelectedSeats((prev) =>
      prev.includes(seatId) ? prev.filter((s) => s !== seatId) : [...prev, seatId]
    );
  };

  return (
    <div className="cinema-hall">
      {Array.from({ length: rows }, (_, row) => (
        <div key={row} className="row">
          {Array.from({ length: cols }, (_, col) => {
            const seatId = `${row}-${col}`;
            return (
              <div
                key={seatId}
                className={`seat ${selectedSeats.includes(seatId) ? "selected" : ""}`}
                onClick={() => toggleSeat(row, col)}
              >
                {col + 1}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default CinemaHall;
