import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export default function RevenueWidget() {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const data = [
    { name: 'Product A', value: 400, color: '#3b82f6' },
    { name: 'Product B', value: 300, color: '#10b981' },
    { name: 'Product C', value: 300, color: '#f59e0b' },
    { name: 'Product D', value: 200, color: '#6366f1' },
  ];
  
  const handleClick = (data, index) => {
    setSelectedItem(index === selectedItem ? null : index);
  };

  return (
    <div className="widget h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Revenue Sources</h3>
        <button className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
          View Details
        </button>
      </div>
      <div className="flex-1 min-h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              onClick={handleClick}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  stroke={index === selectedItem ? "#ffffff" : "none"}
                  strokeWidth={index === selectedItem ? 2 : 0}
                  style={{ 
                    filter: index === selectedItem ? 'drop-shadow(0px 0px 4px rgba(0,0,0,0.3))' : 'none',
                    outline: index === selectedItem ? '2px solid #ffffff' : 'none',
                    opacity: selectedItem === null || selectedItem === index ? 1 : 0.6,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}K`, 'Revenue']}
            />
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              formatter={(value, entry, index) => (
                <span style={{ color: entry.color, cursor: 'pointer' }}>
                  {value}
                </span>
              )}
              onClick={(data, index) => handleClick(data, index)}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}