import { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,Tooltip, ResponsiveContainer } from 'recharts';
import { useTheme } from '../../context/ThemeContext';

export default function PerformanceWidget() {
  const { isDarkMode } = useTheme();
  const [dataSet, setDataSet] = useState('current');
  
  const currentData = [
    { subject: 'Marketing', A: 120, fullMark: 150 },
    { subject: 'Research', A: 98, fullMark: 150 },
    { subject: 'Development', A: 86, fullMark: 150 },
    { subject: 'Customer Support', A: 99, fullMark: 150 },
    { subject: 'Sales', A: 85, fullMark: 150 },
    { subject: 'Administration', A: 65, fullMark: 150 },
  ];
  
  const previousData = [
    { subject: 'Marketing', A: 110, fullMark: 150 },
    { subject: 'Research', A: 80, fullMark: 150 },
    { subject: 'Development', A: 70, fullMark: 150 },
    { subject: 'Customer Support', A: 80, fullMark: 150 },
    { subject: 'Sales', A: 70, fullMark: 150 },
    { subject: 'Administration', A: 60, fullMark: 150 },
  ];

  return (
    <div className="widget h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Team Performance</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setDataSet('current')}
            className={`px-3 py-1 text-xs rounded-full ${
              dataSet === 'current' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Current
          </button>
          <button 
            onClick={() => setDataSet('previous')}
            className={`px-3 py-1 text-xs rounded-full ${
              dataSet === 'previous' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Previous
          </button>
        </div>
      </div>
      <div className="flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart 
            cx="50%" 
            cy="50%" 
            outerRadius="80%" 
            data={dataSet === 'current' ? currentData : previousData}
          >
            <PolarGrid stroke={isDarkMode ? "#374151" : "#e5e7eb"} />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: isDarkMode ? "#9ca3af" : "#6b7280", fontSize: 12 }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 150]} 
              tick={{ fill: isDarkMode ? "#9ca3af" : "#6b7280" }}
            />
            <Radar 
              name="Performance" 
              dataKey="A" 
              stroke="#6366f1" 
              fill="#6366f1" 
              fillOpacity={0.6} 
            />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}