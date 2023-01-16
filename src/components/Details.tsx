import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../lib/controller';
import Information from './Information';

export default function Details() {

  const {id} = useParams();
  
  // signle hotel
  const getHotel = doc(firestore, `Hotels/${id}`) 
  const [isLoading, setIsLoading] = useState(false);
  const [hotel, setHotel] = useState({});

  useEffect(() => {
    const fetchHotelData = async () => {
      setIsLoading(true);
      const docSnap = await getDoc(getHotel);
      if(docSnap.exists()) {
        const newHotel = {
          id: docSnap.id,
          ...docSnap.data(),
        }
        setHotel(newHotel);
        setIsLoading(false);
      } else {
        console.log('NO SUCH DOCUMENT');
      }
    }
    fetchHotelData();
  }, [])
  console.log(hotel);
  if(isLoading) {
    return <div className='loading'/>
  }
  return (
      <div className="hotel-details">
          {hotel ? (
            <Information hotel={hotel} detailsPage />
          ) : null }
      </div>
  )
};
