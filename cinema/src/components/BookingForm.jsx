import { useState } from "react";
import BookingService from "../services/BookingService";
import { toast } from "react-toastify";

const BookingForm = ({ movieId, selectedSeats, onBookingSuccess }) => {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Ім'я обов'язкове";
    if (!form.phone) newErrors.phone = "Телефон обов'язковий";
    if (!form.email) newErrors.email = "Email обов'язковий";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Некоректний email";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    BookingService.saveBooking(movieId, selectedSeats, form);
    toast.success("Бронювання успішне!✅");
    setTimeout(() => {
        window.location.reload(); // 🆕 Оновлення сторінки після короткої затримки
    }, 2000);
    onBookingSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <input
        type="text"
        placeholder="Ім'я"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        type="tel"
        placeholder="Телефон"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <button type="submit">Забронювати</button>
    </form>
  );
};

export default BookingForm;
