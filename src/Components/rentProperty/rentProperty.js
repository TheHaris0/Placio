import React from 'react'
// import styles from './rentProperty.module.css'
import NavBar from '../navBar/navBar'
import SearchRentProperty from '../searchRentProperty/searchRentProperty'
import Footer from '../Footer/footer'
import NewListedPropertyToRent from "../newListedPropertyToRent/newListedPropertyToRent";


function RentProperty() {
  return (
    <>
        <NavBar/>
        <SearchRentProperty/>
        <NewListedPropertyToRent/>
        <Footer/>
    </>
    
    
  )
}

export default RentProperty