import { VehicleData, VehicleStats } from '../types/vehicle';

const INDIAN_STATES = ['MH', 'DL', 'KA', 'TN', 'GJ', 'UP', 'WB', 'AP', 'TS', 'KL'];
const INDIAN_CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Ahmedabad'];
const VEHICLE_MAKES = ['Tata', 'Mahindra', 'Maruti Suzuki', 'Hyundai', 'Honda'];
const FUEL_TYPES = ['Petrol', 'Diesel', 'CNG', 'Electric'];

export const generateMockVehicleData = (plateNumber: string): VehicleData => {
  const state = INDIAN_STATES[Math.floor(Math.random() * INDIAN_STATES.length)];
  const make = VEHICLE_MAKES[Math.floor(Math.random() * VEHICLE_MAKES.length)];
  const year = 2015 + Math.floor(Math.random() * 9);
  
  return {
    plate_number: plateNumber,
    make,
    model: `${make} Model ${Math.floor(Math.random() * 5) + 1}`,
    year,
    state,
    status: 'Active',
    owner_name: 'John Doe',
    registration_date: new Date(year, 0, 1).toISOString().split('T')[0],
    insurance_validity: new Date(2024, 11, 31).toISOString().split('T')[0],
    vehicle_class: 'LMV',
    fuel_type: FUEL_TYPES[Math.floor(Math.random() * FUEL_TYPES.length)],
    engine_number: `EN${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
    chassis_number: `CH${Math.random().toString(36).substring(2, 10).toUpperCase()}`,
    rto_code: `${state}02`
  };
};

export const generateVehicleStats = (): VehicleStats => ({
  complianceScore: 70 + Math.floor(Math.random() * 30),
  safetyRating: 70 + Math.floor(Math.random() * 30),
  emissionScore: 70 + Math.floor(Math.random() * 30),
  documentValidity: 70 + Math.floor(Math.random() * 30),
});