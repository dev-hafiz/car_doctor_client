import { useEffect, useState } from "react";
import useAuth from "../../Firbase/Hook/useAuth";
import BookingRow from "./BookingRow";

const Bookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  console.log(bookings);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [user.email]);

  return (
    <div className="h-screen">
      <div className="overflow-x-auto h-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>

              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingRow key={booking._id} booking={booking} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
