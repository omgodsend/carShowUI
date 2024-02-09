import axios, { AxiosRequestConfig } from "axios";
import { Car, CarEntry, CarResponse } from "./Components/types";

// const getAxiosConfig = (): AxiosRequestConfig => {
//         // const token = `Bearer${sessionStorage.getItem('jwt')}`;
//         return {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': token
//             }
//         }
//     }

// src/api/carAPI.js

import axiosInstance from './Components/axiosInstance'; // Adjust the path as necessary

export const getCars = async () => {
  try {
    const response = await axiosInstance.get('/api/v1/car/cars');
    return response.data;
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    throw error; // Or handle it as per your application's error handling policy
  }
};

const getAxiosConfig = (): AxiosRequestConfig => {
        const token = sessionStorage.getItem('jwt'); // Make sure this key matches what you used to store the token
        console.log(token)
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}` : undefined, // Properly format the Authorization header
            }
        };
    };
    
    
    
    

export const deleteCar = async (id:number): Promise<CarResponse> => {

        const response =  await axios.delete (`${import.meta.env.VITE_API_URL}/delete/${id}`)
        return response.data;
}

export const addCar = async(car:Car): Promise<CarResponse> => {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/add`,car,{
                headers:{
                        'Content-Type': 'application/json'
                }
        })
        return response.data;
}

// export const getCars = async(): Promise<CarResponse[]> => {
//         const response =  await axios.get (`${import.meta.env.VITE_API_URL}/cars`,getAxiosConfig())
//         return response.data;
// }        

export const updateCar =async (carEntry:CarEntry) => {

  
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/${carEntry.url}`,carEntry.car,{
       
          
          headers : {
            'Content-Type': 'application/json'
          }
        })
        return response.data;
      }
