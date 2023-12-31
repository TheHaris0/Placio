import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import NavBar from "../navBar/navBar";
import ExploreLocations from "../exploreLocations/exploreLocation";
import NewListedPropertyToBuy from "../newListedPropertyToBuy/newListedPropertyToBuy";
import NewListedPropertyToRent from "../newListedPropertyToRent/newListedPropertyToRent";
function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <ExploreLocations />
      <NewListedPropertyToBuy />
      <NewListedPropertyToRent />
      <Footer />
    </>
  );
}

export default Home;
