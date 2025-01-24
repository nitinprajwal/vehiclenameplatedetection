import { VehicleData } from '../types/vehicle';
import { generateFallbackAnalysis } from '../utils/fallbackAnalysis';

// Remove direct Groq API calls from frontend
export const analyzeVehicleData = async (vehicleData: VehicleData): Promise<string> => {
  try {
    // For demo purposes, we'll use the fallback analysis
    // In production, this should make a call to your backend API
    // which would then safely make the Groq API call
    return generateFallbackAnalysis(vehicleData);
  } catch (error) {
    console.error('Analysis error:', error);
    return generateFallbackAnalysis(vehicleData);
  }
};