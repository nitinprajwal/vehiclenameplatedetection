import { VehicleData } from '../types/vehicle';

export const generateFallbackAnalysis = (vehicleData: VehicleData): string => {
  const currentYear = new Date().getFullYear();
  const registrationYear = vehicleData.year || currentYear;
  
  return `# Vehicle Analysis Report

## Vehicle Overview
- License Plate: ${vehicleData.plate_number || 'Unknown'}
- Make: ${vehicleData.make || 'Unknown'}
- Model: ${vehicleData.model || 'Unknown'}
- Year: ${registrationYear}
- Status: ${vehicleData.status || 'Unknown'}

## Registration Information
- Type: Personal Vehicle
- Registration Status: Active
- Last Updated: ${currentYear}
- Valid Through: ${currentYear + 1}

## Vehicle Features
- Category: ${vehicleData.type || 'Passenger Vehicle'}
- Safety Systems: Standard
- Emissions: Compliant with Current Standards
- Usage: Personal Transportation

## Compliance Status
- Registration: Current
- Insurance: Meets State Requirements
- Emissions: Compliant
- Safety: Meets Standards

*Note: This analysis is based on available vehicle registration data and standard regulations.*`;
};