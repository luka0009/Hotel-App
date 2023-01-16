import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel } from "../lib/controller";

export default function Create() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Feature, setFeature] = useState("Room Only");
  const [Location, setLocation] = useState("");
  const [Stars, setStars] = useState("1");
  // const [region, setRegion] = useState("");
  const [Country, setCountry] = useState("");
  const [Review, setReview] = useState("");
  // const [totalPrice, setTotalPrice] = useState("");
  const [Price, setPrice] = useState('');

  const navigate = useNavigate();

  function addNewHotel(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addHotel({
      Title,
      Description,
      Feature,
      Location,
      Stars,
      Country,
      Review,
      Price,
    })
    navigate('/')
  }
  return (
    <div className="create">
      <h2>Add New Hotel</h2>
      <form
        onSubmit={(e) => {
          addNewHotel(e);
        }}
      >
        <label>Hotel Title</label>
        <input
          type="text"
          required
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
         <label>Hotel Description:</label>
        <textarea
          required
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Main Feature:</label>
        <select value={Feature} onChange={(e) => setFeature(e.target.value)}>
          <option value="Room Only">Room Only</option>
          <option value="Room with Breakfast included">
            Room with Breakfast included
          </option>
          <option value="Local Charges Payable at Hotel">
            Local Charges Payable at Hotel
          </option>
          <option value="Free Parking for all guests">
            Free Parking for all guests
          </option>
          <option value="Free WiFi">Free WiFi</option>
          <option value="Spa and wellness centre included">
            Spa and wellness centre included
          </option>
          <option value="Private parking at the hotel">
            Private parking at the hotel
          </option>
          <option value="Restaurant & Bar">Restaurant & Bar</option>
          <option value="Swimming pool">Swimming pool</option>
          <option value="Room and Parking">Room and Parking</option>
        </select>

        <label>Image URL:</label>
        <input
          type="text"
          required
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>Stars Rating:</label>
        <select value={Stars} onChange={(e) => setStars(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label>Country:</label>
        <input
          type="text"
          required
          value={Country}
          onChange={(e) => setCountry(e.target.value)}
        />
        {/* <label>Region:</label>
        <input
          type="text"
          required
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        /> */}
        {/* <label>Number of Reviews:</label>
        <input
          type="number"
          required
          min="1"
          max="1000"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        /> */}
        {/* <label> Total Price (£):</label>
        <input
          type="text"
          required
          value={totalPrice}
          onChange={(e) => setTotalPrice(e.target.value)}
        /> */}
        <label>Price per Night (£):</label>
        <input
          type="text"
          required
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Customer Review</label>
        <input
          type="text"
          required
          value={Review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button style={{
          backgroundColor: 'darkslateblue',
          color: 'white',
          padding: '10px',
          fontSize: '17px',
          margin: '14px auto',
          }}>Add Hotel</button>
      </form>
    </div>
  );
}
