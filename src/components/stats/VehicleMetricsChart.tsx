import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { VehicleStats as VehicleStatsType } from '../../types/vehicle';

interface VehicleMetricsChartProps {
  stats: VehicleStatsType;
}

export const VehicleMetricsChart: React.FC<VehicleMetricsChartProps> = ({ stats }) => {
  const data = [
    { name: 'Compliance', value: stats.complianceScore },
    { name: 'Safety', value: stats.safetyRating },
    { name: 'Emissions', value: stats.emissionScore },
    { name: 'Documents', value: stats.documentValidity },
  ];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#2563eb" 
            strokeWidth={2}
            dot={{ fill: '#2563eb' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};