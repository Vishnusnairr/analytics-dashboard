import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../context/ThemeContext';

export default function SalesChart() {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('weekly');
  
  // Sample data - in a real app this would come from an API
  const weeklyData = [
    { name: 'Mon', value: 4000 },
    { name: 'Tue', value: 3000 },
    { name: 'Wed', value: 5000 },
    { name: 'Thu', value: 2780 },
    { name: 'Fri', value: 1890 },
    { name: 'Sat', value: 2390 },
    { name: 'Sun', value: 3490 },
  ];
  
  const monthlyData = [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 19000 },
    { name: 'Mar', value: 15000 },
    { name: 'Apr', value: 17800 },
    { name: 'May', value: 18900 },
    { name: 'Jun', value: 23900 },
    { name: 'Jul', value: 34900 },
  ];
  
  const yearlyData = [
    { name: '2018', value: 240000 },
    { name: '2019', value: 300000 },
    { name: '2020', value: 180000 },
    { name: '2021', value: 278000 },
    { name: '2022', value: 389000 },
    { name: '2023', value: 439000 },
    { name: '2024', value: 549000 },
  ];
  
  const getData = () => {
    switch(activeTab) {
      case 'weekly': return weeklyData;
      case 'monthly': return monthlyData;
      case 'yearly': return yearlyData;
      default: return weeklyData;
    }
  };

  return (
    <div className="widget h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sales Overview</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('weekly')}
            className={`px-3 py-1 text-xs rounded-full ${
              activeTab === 'weekly' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Weekly
          </button>
          <button 
            onClick={() => setActiveTab('monthly')}
            className={`px-3 py-1 text-xs rounded-full ${
              activeTab === 'monthly' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setActiveTab('yearly')}
            className={`px-3 py-1 text-xs rounded-full ${
              activeTab === 'yearly' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="flex-1 min-h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={getData()} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#374151" : "#e5e7eb"} />
            <XAxis 
              dataKey="name" 
              stroke={isDarkMode ? "#9ca3af" : "#6b7280"} 
              tick={{ fill: isDarkMode ? "#9ca3af" : "#6b7280" }}
            />
            <YAxis 
              stroke={isDarkMode ? "#9ca3af" : "#6b7280"} 
              tick={{ fill: isDarkMode ? "#9ca3af" : "#6b7280" }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                color: isDarkMode ? "#ffffff" : "#000000",
                border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2 }}
              activeDot={{ r: 6, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}