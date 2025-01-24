import { useState } from 'react';
import { SearchResult, VehicleData, ChatMessage } from '../types/vehicle';
import { analyzeVehicleData } from '../services/groqApi';
import { generateMockVehicleData, generateVehicleStats } from '../utils/mockData';

export const useVehicleSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SearchResult>({
    vehicleData: null,
    aiAnalysis: ''
  });
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [stats, setStats] = useState(generateVehicleStats());

  const searchVehicle = async (plateNumber: string) => {
    setIsLoading(true);
    setResult({ vehicleData: null, aiAnalysis: '' });

    try {
      const mockVehicleData = generateMockVehicleData(plateNumber);
      const analysis = await analyzeVehicleData(mockVehicleData);
      setStats(generateVehicleStats());
      
      setResult({
        vehicleData: mockVehicleData,
        aiAnalysis: analysis
      });

      // Add initial AI message
      setMessages([{
        role: 'assistant',
        content: 'Vehicle information retrieved! Feel free to ask any questions about the vehicle.'
      }]);
    } catch (error) {
      console.error('Search error:', error);
      setResult({
        vehicleData: null,
        aiAnalysis: 'Failed to retrieve vehicle information.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (message: string) => {
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setIsLoading(true);

    try {
      // Simulate AI response
      const response = `I understand you're asking about "${message}". Based on the vehicle data, I can tell you that this is a ${result.vehicleData?.make} ${result.vehicleData?.model} from ${result.vehicleData?.year}. The vehicle is currently ${result.vehicleData?.status?.toLowerCase()} and registered in ${result.vehicleData?.state}.`;
      
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'assistant', content: response }]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I encountered an error processing your request.' 
      }]);
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    ...result,
    stats,
    messages,
    searchVehicle,
    sendMessage
  };
};