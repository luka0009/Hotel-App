import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteHotel } from "../lib/controller";
import { NewHotelType } from "../types/hotels";
import Edit from "./Edit";

interface Iprops {
  hotel: NewHotelType;
  detailsPage?: boolean;
}

export default function Information({ hotel, detailsPage }: Iprops) {
  console.log(hotel);
  const [editDesctiption, setEeditDesctiption] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    alert('NO MORE REVIEWS FOR THIS HOTEL');
  }
  return (
    <div className="hotel-preview">
      <div className="image-container">
        <img className="location-image" src={hotel.Location} alt="Hotel" />
        <div className="highlights">
          <div className="highlights-text">
            <h2>{hotel.Title}</h2>
            <p className="region">{hotel.Country}</p>
          </div>
          <div className="highlights-price">
            <h2 className="per-night">£{hotel.Price}</h2>
            <p>per night</p>
          </div>
        </div>
      </div>
      <hr style={{borderBottom: '2px solid black',}}/>
      {/* Description */}
      <div className="description">
        <span className="reviews">
          Review: <strong className="review-number">{hotel.Stars} stars</strong>{" "}
          - {hotel.Review} <br />  
          <button className="review-btn" onClick={handleClick}> 
          view more reviews 
          </button> 
        </span>
        <hr />
        <span className="feature">Main Feature: {hotel?.Feature}</span>
        {detailsPage ? (
          <>
          <p className="description-text">
            {hotel.Description}
            <br /> <br />
            <strong
              onClick={() => setEeditDesctiption((prev) => !prev)}
              className="edit-text"
            >
              Edit Description
            </strong>
            {editDesctiption && <Edit hotel={hotel} editDesctiption={editDesctiption} setEeditDesctiption={setEeditDesctiption} />}
          </p>
          <button className="moreinfo-btn" onClick={() => deleteHotel(hotel.id, navigate)}>Delete Hotel</button>
          </>
        ) : (
          <Link to={`/hotels/${hotel.id}`}>
            <button className="moreinfo-btn"> view more information </button>
          </Link>
        )}
      </div>
    </div>
  );
}
