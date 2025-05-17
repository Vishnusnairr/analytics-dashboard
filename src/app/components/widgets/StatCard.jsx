export default function StatCard({ title, value, trend, icon, color = 'blue' }) {
    const colorClasses = {
      blue: 'text-blue-500 bg-blue-100 dark:bg-blue-900 dark:bg-opacity-20',
      green: 'text-green-500 bg-green-100 dark:bg-green-900 dark:bg-opacity-20',
      red: 'text-red-500 bg-red-100 dark:bg-red-900 dark:bg-opacity-20',
      yellow: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900 dark:bg-opacity-20',
      purple: 'text-purple-500 bg-purple-100 dark:bg-purple-900 dark:bg-opacity-20',
    };
  
    const trendColor = trend?.value > 0 ? 'text-green-500' : 'text-red-500';
  
    return (
      <div className="widget flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
            <div className="mt-1 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
              {trend && (
                <span className={`ml-2 text-sm font-medium ${trendColor} flex items-center`}>
                  {trend.value > 0 ? (
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  )}
                  {Math.abs(trend.value)}%
                </span>
              )}
            </div>
            {trend && <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">vs {trend.period}</p>}
          </div>
          <div className={`p-2 rounded-md ${colorClasses[color]}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon}></path>
            </svg>
          </div>
        </div>
        <div className="mt-auto">
          <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className={`h-full ${colorClasses[color].split(' ')[0]} bg-opacity-100`} style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    );
  }