import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  name: string;
  value: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({ name, value }) => (
  <motion.div
    initial={{ scale: 0.9 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.3 }}
    className="bg-gray-50 p-4 rounded-lg"
  >
    <div className="flex items-center justify-between mb-2">
      <span className="text-gray-600">{name}</span>
      <span className="text-lg font-semibold text-blue-600">{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-blue-600 h-2 rounded-full"
      />
    </div>
  </motion.div>
);