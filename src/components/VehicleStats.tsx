import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { VehicleStats } from '../types/vehicle';
import { Shield, Gauge, FileCheck, AlertTriangle } from 'lucide-react';

interface VehicleStatsProps {
  stats: VehicleStats;
}

export const VehicleStats: React.FC<VehicleStatsProps> = ({ stats }) => {
  const data = [
    { name: 'Compliance', value: stats.complianceScore },
    { name: 'Safety', value: stats.safetyRating },
    { name: 'Emissions', value: stats.emissionScore },
    { name: 'Documents', value: stats.documentValidity },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 space-y-6"
    >
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <Shield className="text-blue-600" />
        Vehicle Performance Metrics
      </h3>

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

      <div className="grid grid-cols-2 gap-4 mt-4">
        {data.map((item) => (
          <motion.div
            key={item.name}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-600">{item.name}</span>
              <span className="text-lg font-semibold text-blue-600">{item.value}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-blue-600 h-2 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};