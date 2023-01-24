import React, { useState } from "react";
import { updateHotel } from "../lib/controller";
import { NewHotelType } from "../types/hotels";

interface props {
  editDesctiption: boolean;
  setEeditDesctiption: React.Dispatch<React.SetStateAction<boolean>>;
  hotel: NewHotelType;
}


export default function Edit({ editDesctiption, setEeditDesctiption, hotel }: props) {
 
  const [newDescription, setNewDescription] = useState<any>(hotel.Description);

  function handleUpdate() {
    updateHotel(hotel.id, { Description: newDescription });
    setEeditDesctiption(!editDesctiption);
    navigate('/')
  }

  return (
    <div className="edit">
      <label htmlFor="description" style={{color: 'white'}}>Please enter hotel description below 
      <button onClick={() => setEeditDesctiption(false)} style={{marginLeft: '55%', backgroundColor: 'red', color: 'white'}}>X</button>
      </label>
      <textarea
        required
        name="description"
        id="description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        cols={30}
        rows={10}
        style={{
          color: 'white',
          backgroundColor: 'darkslateblue',
          fontSize: '17px',
          fontWeight: '400',
          outline: '2px solid white',
          border: 'none',
          padding: '5px'
        }}
      ></textarea>
      <button
        className="update-button"
        onClick={() => {handleUpdate()}}
      >
        Update Hotel
      </button>
    </div>
  );
}
