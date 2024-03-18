import React, { useState, useEffect } from 'react';
import MainNavBar from '../Components/Common/MainNavBar';
import Cards from '../Components/Cards';
import Footer from '../Components/Common/Footer';
import AxiosInstance from '../config/AxiosInstance';

function Home() {
  const [courtData, setCourtData] = useState([]);

  useEffect(() => {
    getAllcourtData()
  }, []);

  const getAllcourtData = async () => {
    try {
      const response = await AxiosInstance.get('/users/getAllcourtData');
      console.log('Courtdata:', response.data);
      setCourtData(response.data);
    } catch (error) {
      console.log('Error in getting data', error);
    }
  };

  return (
    <>
      <MainNavBar />
      <div className='container'>
        <div className='row p-2 gap-3'>
          {courtData.map((court) => (
            <Cards key={court.id} data={court} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;