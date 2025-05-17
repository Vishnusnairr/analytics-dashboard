import { useState, useEffect } from 'react';
import StatCard from './widgets/StatCard';
import SalesChart from './widgets/SalesChart';
import ProfitLossWidget from './widgets/ProfitLossWidget';
import UserActivityMap from './widgets/UserActivityMap';
import RevenueWidget from './widgets/RevenueWidget';
import PerformanceWidget from './widgets/PerformanceWidget';

export default function DashboardGrid() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading dashboard data...</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <StatCard
          title="Total Revenue"
          value="$86,589"
          trend={{ value: 12.5, period: "last month" }}
          icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          color="blue"
        />
        <StatCard
          title="New Users"
          value="2,541"
          trend={{ value: 8.2, period: "last month" }}
          icon="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          color="green"
        />
        <StatCard
          title="Active Sessions"
          value="14,623"
          trend={{ value: -3.6, period: "last month" }}
          icon="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          color="purple"
        />
        <StatCard
          title="Bounce Rate"
          value="32.4%"
          trend={{ value: -2.7, period: "last month" }}
          icon="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          color="red"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="h-96">
          <SalesChart />
        </div>
        <div className="h-96">
          <ProfitLossWidget />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="h-80">
          <UserActivityMap />
        </div>
        <div className="h-80">
          <RevenueWidget />
        </div>
        <div className="h-80">
          <PerformanceWidget />
        </div>
      </div>
    </div>
  );
}