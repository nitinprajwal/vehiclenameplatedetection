import { VehicleData } from '../types/vehicle';

export const generatePrompt = (vehicleData: VehicleData): string => {
  return `Please analyze this vehicle information and provide a detailed report:

Vehicle Data:
${JSON.stringify(vehicleData, null, 2)}

Please include:
1. Location analysis (country, state, registration details)
2. Vehicle specifications and features
3. Registration status and compliance
4. Any notable patterns or insights

Format the response in Markdown with clear sections and bullet points.`;
};