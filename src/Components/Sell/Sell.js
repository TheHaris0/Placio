// import React, { useState } from "react";
import NavBar from "../navBar/navBar";
import Footer from "../Footer/footer";
import styles from "./Sell.module.css";

function Sell() {
  return (
    <>
      <NavBar />
      <div className={styles.heading_main_container}>
        <div className={styles.heading_content_container}>
          <div class={styles.heading_Text_container}>
            <h1>Upload your Property Detail</h1>
            <h2>Get the best value for your property in a few steps.</h2>
          </div>
        </div>
        <div className={styles.property}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What do you want to do?
            </h5>
            <div class={styles.radio_section}>
              <div class={styles.radio_item}>
                <input type="radio" name="buy-sell" id="Sell" value="Sell" />
                <label for="Sell">Sell</label>
              </div>

              <div class={styles.radio_item}>
                <input type="radio" name="buy-sell" id="Rent" value="Rent" />
                <label for="Rent">Rent</label>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What is the type of your property?
            </h5>
            <div class={styles.radio_section}>
              <div class={styles.radio_item}>
                <input
                  type="radio"
                  name="kind_of_property"
                  id="House"
                  value="House"
                />
                <label for="House">House</label>
              </div>

              <div class={styles.radio_item}>
                <input
                  type="radio"
                  name="kind_of_property"
                  id="Apartment"
                  value="Apartment"
                />
                <label for="Apartment">Apartment</label>
              </div>
              <div class={styles.radio_item}>
                <input
                  type="radio"
                  name="kind_of_property"
                  id="Residential_Plot"
                  value="Residential_Plot"
                />
                <label for="Residential_Plot">Residential Plot</label>
              </div>
              <div class={styles.radio_item}>
                <input
                  type="radio"
                  name="kind_of_property"
                  id="Commercial_Plot"
                  value="Commercial_Plot"
                />
                <label for="Commercial_Plot">Commercial Plot</label>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              Which city is your property in?
            </h5>
            <div className={styles.input_group_container}>
              <input type="text" name="City" id="City" placeholder="" />
              <label for="City">City</label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What is the size of your property?
            </h5>
            <div className={styles.input_group_container}>
              <input type="text" name="size" id="size" placeholder="" />
              <label for="size">Size</label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What is the asking price?
            </h5>
            <div className={styles.input_group_container}>
              <input type="text" name="price" id="price" placeholder="" />
              <label for="price">Price</label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What do you love about the place?
            </h5>
            <div className={styles.input_group_container}>
              <input
                type="text"
                name="Description"
                id="Description"
                placeholder=""
              />
              <label for="Description">Describe Your Property in detail</label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What is your name?
            </h5>
            <div className={styles.input_group_container}>
              <input type="text" name="Name" id="Name" placeholder="" />
              <label for="Name">Name</label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What is your email?
            </h5>
            <div className={styles.input_group_container}>
              <input type="text" name="email" id="email" placeholder="" />
              <label for="email">Email</label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What is your Contact Number?
            </h5>
            <div className={styles.input_group_container}>
              <input
                type="text"
                name="Contact_Number"
                id="Contact_Number"
                placeholder=""
              />
              <label for="Contact_Number">Contact Number</label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h5 className={styles.property_sell_section_heading}>
              What is your Whatsapp Contact Number?
            </h5>
            <div className={styles.input_group_container}>
              <input
                type="text"
                name="Whattsapp"
                id="Whattsapp"
                placeholder=""
              />
              <label for="Whattsapp">Whatsapp Contact Number</label>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <button className={styles.submit}>Add Property Add</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Sell;
