import React from 'react';
import { User, ShoppingCart, FileText, Bell } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      icon: User,
      title: 'New user registered',
      description: 'Sarah Johnson joined the platform',
      time: '2 minutes ago',
      color: 'bg-blue-500'
    },
    {
      icon: ShoppingCart,
      title: 'New order received',
      description: 'Order #12847 worth $299.99',
      time: '5 minutes ago',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Report generated',
      description: 'Monthly sales report is ready',
      time: '15 minutes ago',
      color: 'bg-purple-500'
    },
    {
      icon: Bell,
      title: 'System notification',
      description: 'Server maintenance scheduled',
      time: '1 hour ago',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <div key={index} className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${activity.color}`}>
                <Icon size={16} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">
                  {activity.title}
                </p>
                <p className="text-sm text-gray-600">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
        View all activities
      </button>
    </div>
  );
};

export default ActivityFeed;