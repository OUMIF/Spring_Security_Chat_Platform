import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL;



export const listEmployees = () => axios.get(API_URL);

export const createEmployee = (employee) => axios.post(API_URL, employee);

export const getEmployee = (employeeId) => axios.get(API_URL + '/' + employeeId);

export const updateEmployee = (employeeId, employee) => axios.put(API_URL + '/' + employeeId, employee);

export const deleteEmployee = (employeeId) => axios.delete(API_URL + '/' + employeeId);