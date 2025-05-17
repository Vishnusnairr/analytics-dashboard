import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../context/ThemeContext';

export default function ProfitLossWidget() {
  const { isDarkMode } = useTheme();
  const [period, setPeriod] = useState('quarterly');
  
  const data = [
    { name: 'Q1', profit: 4000, loss: -2400 },
    { name: 'Q2', profit: 3000, loss: -1398 },
    { name: 'Q3', profit: 9800, loss: -2000 },
    { name: 'Q4', profit: 7300, loss: -3908 },
  ];

  return (
    <div className="widget h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Profit & Loss</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setPeriod('quarterly')}
            className={`px-3 py-1 text-xs rounded-full ${
              period === 'quarterly' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Quarterly
          </button>
          <button 
            onClick={() => setPeriod('yearly')}
            className={`px-3 py-1 text-xs rounded-full ${
              period === 'yearly' 
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
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
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
              formatter={(value) => new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              }).format(Math.abs(value))}
            />
            <Bar dataKey="profit" fill="#10b981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="loss" fill="#ef4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}