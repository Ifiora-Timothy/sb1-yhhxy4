import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Users, DollarSign, Activity } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex space-x-4">
          <Link
            to="/admin/orders"
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-sm font-medium"
          >
            View Orders
          </Link>
          <Link
            to="/admin/users"
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg text-sm font-medium"
          >
            Manage Users
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            title: 'Total Volume',
            value: '$12.5M',
            icon: BarChart3,
            color: 'bg-primary-600',
            link: '/admin/orders',
          },
          {
            title: 'Active Users',
            value: '2,451',
            icon: Users,
            color: 'bg-green-600',
            link: '/admin/users',
          },
          {
            title: 'Revenue',
            value: '$45.2K',
            icon: DollarSign,
            color: 'bg-blue-600',
            link: '/admin/orders',
          },
          {
            title: 'Active Orders',
            value: '156',
            icon: Activity,
            color: 'bg-yellow-600',
            link: '/admin/orders',
          },
        ].map((stat, index) => (
          <Link
            key={index}
            to={stat.link}
            className="bg-dark-400 rounded-lg p-6 flex items-center hover:bg-dark-300 transition-colors"
          >
            <div
              className={`${stat.color} p-4 rounded-lg mr-4 flex items-center justify-center`}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-dark-400 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              type: 'New User',
              details: 'John Doe registered',
              time: '5 minutes ago',
            },
            {
              type: 'Large Trade',
              details: 'BTC/USDT - 2.5 BTC @ $45,000',
              time: '15 minutes ago',
            },
            {
              type: 'Withdrawal',
              details: '0.5 BTC withdrawal request',
              time: '1 hour ago',
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0"
            >
              <div>
                <p className="font-medium">{activity.type}</p>
                <p className="text-sm text-gray-400">{activity.details}</p>
              </div>
              <span className="text-sm text-gray-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;