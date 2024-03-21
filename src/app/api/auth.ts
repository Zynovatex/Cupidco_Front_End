import axios from "axios";
import { BASE_URL } from "./base-url";

// register user
export const register = async (data: any) => {
    try{ 
        const response = await axios.post(`${BASE_URL}/auth/register`, data)
        return response.data;
    } catch (error: any){
        return error.message;
    }
};

// login
export const login = async (data: any) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth/token`, data)
        return response.data;
    } catch (error: any) {
        return error.message;
    }
}