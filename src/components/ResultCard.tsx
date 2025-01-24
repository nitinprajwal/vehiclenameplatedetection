import React from 'react';
import { Car, MapPin, FileText, Shield } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ResultCardProps {
  vehicleData: any;
  aiAnalysis: string;
}

export const ResultCard: React.FC<ResultCardProps> = ({ vehicleData, aiAnalysis }) => {
  return (
    <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex items-center space-x-3">
        <Car className="text-blue-600" size={24} />
        <h3 className="text-xl font-semibold">Vehicle Information</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(vehicleData).map(([key, value]) => (
          <div key={key} className="p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 capitalize">{key.replace(/_/g, ' ')}</p>
            <p className="font-medium">{String(value)}</p>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center space-x-3 mb-3">
          <Shield className="text-blue-600" size={24} />
          <h4 className="text-lg font-semibold">AI Analysis</h4>
        </div>
        <div className="prose prose-blue max-w-none">
          <ReactMarkdown>{aiAnalysis}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};