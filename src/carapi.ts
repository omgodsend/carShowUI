import axios from "axios";
import { CarResponse } from "./Components/types";

export const deleteCar = async (id:number): Promise<CarResponse> => {

        const response =  await axios.delete (`${import.meta.env.VITE_API_URL}/delete/${id}`)
        return response.data;
}


export const getCars = async(): Promise<CarResponse[]> => {
        const response =  await axios.get (`${import.meta.env.VITE_API_URL}/cars`)
        return response.data;
}        
