import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { SearchForm } from './components/SearchForm';
import { ResultCard } from './components/ResultCard';
import { VehicleStatsDisplay } from './components/stats/VehicleStatsDisplay';
import { ChatInterface } from './components/ChatInterface';
import { LoadingIndicator } from './components/LoadingIndicator';
import { ErrorMessage } from './components/ErrorMessage';
import { useVehicleSearch } from './hooks/useVehicleSearch';

function App() {
  const { 
    isLoading, 
    vehicleData, 
    aiAnalysis, 
    stats,
    messages,
    error, 
    searchVehicle,
    sendMessage
  } = useVehicleSearch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-4"
          >
            <div className="bg-blue-600 p-4 rounded-full">
              <Camera className="text-white" size={40} />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Vehicle Nameplate Detection System
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enter a license plate number to get detailed vehicle information and AI-powered analysis
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <SearchForm onSearch={searchVehicle} isLoading={isLoading} />
          
          {isLoading && <LoadingIndicator />}
          {error && <ErrorMessage message={error} />}
          
          {vehicleData && !isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ResultCard vehicleData={vehicleData} aiAnalysis={aiAnalysis} />
              <div className="space-y-6">
                <VehicleStatsDisplay stats={stats} />
                <ChatInterface
                  messages={messages}
                  onSendMessage={sendMessage}
                  isLoading={isLoading}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;