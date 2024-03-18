

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Home from './Pages/home';
import CourtUserViewPage from './Pages/courtUserViewPage';
import AddNewCourt from './Pages/AddNewCourt';
import Mybookings from './Pages/Mybookings';
import NavBar from './Components/Common/MainNavBar'; // Import NavBar component
import { AdminAuth, LoginAuth, UserAuth } from './Authorisation/authorisation';
import { ToastContainer } from 'react-toastify';
import AddCourtForm from './Components/Common/AddCourtForm';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route element={<LoginAuth />}>
            <Route path='/' element={<Login/>} />
          </Route>  

        <Route element={<AdminAuth />}>
          {/* Routes accessible to admins */}
          <Route path="/AddNewCourt" element={<AddCourtForm />} />
          {/* Other admin routes */}
        </Route>
 {/* user routes */}
 <Route element={<UserAuth />}>
            <Route path='/home' element={<Home />} />
            <Route path="/courtUserViewPage/:id" element={<CourtUserViewPage />} />
            <Route path="/Mybookings" element={<Mybookings/>} />
          </Route>
      </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </>

  );
}
export default App;
