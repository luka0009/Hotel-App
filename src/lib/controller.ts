import { async } from "@firebase/util";
import {
    addDoc, collection, deleteDoc, doc,
    getFirestore, setDoc,
  } from "firebase/firestore";
import { Navigate } from "react-router-dom";
import { AddHotelType } from "../types/hotels";
import { app } from "./firebase";

export const firestore = getFirestore(app);

export const hotelsCollection = collection(firestore, 'Hotels');

// new document
export const addHotel = async (hotelData: AddHotelType) => {
  const newHotel = await addDoc(hotelsCollection, {...hotelData})
}

// delete
export const deleteHotel = async (id: string | undefined, navigate: any) => {
  const document = doc(firestore, `Hotels/${id}`);
  await deleteDoc(document);
  navigate('/');
}

// update
export const updateHotel = async (id: string | undefined, docData: any) => {
  const getHotel = doc(firestore, `Hotels/${id}`);
  await setDoc(getHotel, docData, { merge: true });
};