import { onSnapshot, QuerySnapshot, DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { hotelsCollection } from "../lib/controller";
import { NewHotelType } from "../types/hotels";
import Information from "./Information";

export default function Card() {
  const [hotels, setHotels] = useState<NewHotelType[]>([]);
  useEffect(
    () =>
      onSnapshot(hotelsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
        setHotels(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }),
    []
  );
  // console.log(hotels);
  return (
    <div className="card">
      <h2 className="title"> All Hotels </h2>
      {hotels && hotels.length ? (
        <div>
          {hotels?.map((hotel, index) => {
            return (
            <div style={{
              position: 'relative',
            }}>
            <span style={{
              position: 'absolute',
              top: '0rem',
              left: '11rem',
              fontSize: '32px',
              color: 'darkslateblue',
              fontWeight: '500',
            }}>{`${(index + 1)})`}
            </span> 
            <Information key={hotel.id} hotel={hotel} />
            </div>
            )
          })}
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </div>
  );
}
