class BookingService {
    static STORAGE_KEY = "bookings";
  
    // Отримати всі бронювання
    static getBookings() {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    }
  
    // Отримати заброньовані місця для конкретного фільму
    static getBookedSeats(movieId) {
      const bookings = this.getBookings();
      return bookings[movieId] || [];
    }
  
    // Зберегти бронювання
    static saveBooking(movieId, seats, userData) {
      const bookings = this.getBookings();
      bookings[movieId] = [...(bookings[movieId] || []), ...seats];
  
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(bookings));
  
      return { movieId, seats, userData };
    }
  }
  
  export default BookingService;
  