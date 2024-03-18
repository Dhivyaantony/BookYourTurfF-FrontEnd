import React, { useState, useEffect } from 'react';
import AxiosInstance from '../config/AxiosInstance';
import MybookingCard from '../Components/MybookingCard';
import MainNavBar from '../Components/Common/MainNavBar';

function Mybookings() {
  const [bookings, setBookings] = useState([1,2]);

  useEffect(() => {
    getMybookingsData();
  }, []);

  const getMybookingsData = () => {
    AxiosInstance.get('/users/getMybookingsData')
      .then((res) => {
        console.log("Response received:", res);
        console.log("Response data:", res.data);
        setBookings(res.data); // Assuming res.data is an array of booking objects
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  return (
    <>
      <MainNavBar />
      <div>
        {bookings.map((booking, index) => (
          <MybookingCard bookingData={booking} key={index} />
        ))}
      </div>
    </>
  );
}

export default Mybookings;
