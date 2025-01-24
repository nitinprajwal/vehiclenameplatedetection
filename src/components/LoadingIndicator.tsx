import React from 'react';
import { Car } from 'lucide-react';

export const LoadingIndicator: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Car className="animate-bounce text-blue-600" />
    <p className="text-gray-600">Searching for vehicle information...</p>
  </div>
);