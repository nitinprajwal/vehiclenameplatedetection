export interface VehicleData {
  plate_number: string;
  make: string;
  model: string;
  year: number;
  state: string;
  status: string;
  owner_name?: string;
  registration_date?: string;
  insurance_validity?: string;
  vehicle_class?: string;
  fuel_type?: string;
  engine_number?: string;
  chassis_number?: string;
  rto_code?: string;
}

export interface SearchResult {
  vehicleData: VehicleData | null;
  aiAnalysis: string;
  error?: string;
}

export interface VehicleStats {
  complianceScore: number;
  safetyRating: number;
  emissionScore: number;
  documentValidity: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}