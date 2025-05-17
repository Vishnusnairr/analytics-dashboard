import { useState } from 'react';

export default function UserActivityMap() {
  const [view, setView] = useState('global');
  
  return (
    <div className="widget h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">User Activity Map</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => setView('global')}
            className={`px-3 py-1 text-xs rounded-full ${
              view === 'global' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}>
            Global
          </button>
          <button 
            onClick={() => setView('local')}
            className={`px-3 py-1 text-xs rounded-full ${
              view === 'local' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
            }`}>
            Local
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
        <div className="text-center p-4">
          <img 
            src="/api/placeholder/320/180" 
            alt="User Activity Map" 
            className="mx-auto"
          />
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {view === 'global' ? 'Global user distribution' : 'Local user concentration'}
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
          <p className="text-xs text-gray-500 dark:text-gray-400">Top Region</p>
          <p className="font-medium text-gray-900 dark:text-white">North America</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
          <p className="text-xs text-gray-500 dark:text-gray-400">Growth</p>
          <p className="font-medium text-gray-900 dark:text-white">+24.5%</p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md">
          <p className="text-xs text-gray-500 dark:text-gray-400">Users</p>
          <p className="font-medium text-gray-900 dark:text-white">24.5k</p>
        </div>
      </div>
    </div>
  );
}