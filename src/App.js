import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Switch

import RentProperty from './Components/rentProperty/rentProperty';
import Home from './Components/Home/Home';
import Sell from './Components/Sell/Sell';
import PropertyToSearch from './Components/propertyToSearch/propertyToSearch';
import ExploreProperty from './Components/exploreProperty/exploreProperty';
import UserDashboard from './Components/userDashBoard/userDashBoard';
import ContactUs from './Components/ContactUs/ContactUs';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/Sell' element={<Sell/>}/>
          <Route path='/rentals' element={<RentProperty/>} />
          <Route path='/properties' element={<PropertyToSearch />} />
          <Route path='/properties/property' element={<ExploreProperty />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/dashboard' element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
