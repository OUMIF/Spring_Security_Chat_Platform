import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;



export const listEmployees = () => axios.get(API_URL);

export const createEmployee = (employee) => axios.post(API_URL, employee);