import React from 'react';
import { Plus, UserPlus, FileText, Settings, Download, Upload } from 'lucide-react';

const QuickActions: React.FC = () => {
  const actions = [
    { icon: Plus, label: 'New Project', color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: UserPlus, label: 'Add User', color: 'bg-green-500 hover:bg-green-600' },
    { icon: FileText, label: 'Generate Report', color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: Download, label: 'Export Data', color: 'bg-orange-500 hover:bg-orange-600' },
    { icon: Upload, label: 'Import Data', color: 'bg-teal-500 hover:bg-teal-600' },
    { icon: Settings, label: 'Settings', color: 'bg-gray-500 hover:bg-gray-600' },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`flex items-center space-x-3 p-3 rounded-lg text-white transition-colors ${action.color}`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;