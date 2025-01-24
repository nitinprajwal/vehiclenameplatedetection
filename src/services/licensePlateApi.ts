import axios, { AxiosError } from 'axios';
import type { VehicleData } from '../types/vehicle';

const RAPID_API_KEY = 'e17a99dc87msh2d6f139d95f063dp19203djsn51e72446e9ad';

const api = axios.create({
  baseURL: 'https://apibroker-license-plate-search-v1.p.rapidapi.com',
  headers: {
    'x-rapidapi-key': RAPID_API_KEY,
    'x-rapidapi-host': 'apibroker-license-plate-search-v1.p.rapidapi.com'
  }
});

export const searchLicensePlate = async (plateNumber: string): Promise<VehicleData> => {
  try {
    const { data } = await api.get('/license-plate-search', {
      params: { 
        format: 'json', 
        plate: plateNumber 
      }
    });
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.response?.data?.message || 'Failed to fetch vehicle data');
  }
};