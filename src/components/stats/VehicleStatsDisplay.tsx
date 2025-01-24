import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { VehicleStats } from '../../types/vehicle';
import { VehicleMetricsChart } from './VehicleMetricsChart';
import { MetricCard } from './MetricCard';

interface VehicleStatsDisplayProps {
  stats: VehicleStats;
}

export const VehicleStatsDisplay: React.FC<VehicleStatsDisplayProps> = ({ stats }) => {
  const metrics = [
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

      <VehicleMetricsChart stats={stats} />

      <div className="grid grid-cols-2 gap-4 mt-4">
        {metrics.map((metric) => (
          <MetricCard 
            key={metric.name}
            name={metric.name}
            value={metric.value}
          />
        ))}
      </div>
    </motion.div>
  );
};