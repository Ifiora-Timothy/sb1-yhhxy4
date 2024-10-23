import React from 'react';
import { Users as UsersIcon, Mail, Shield, Ban } from 'lucide-react';

const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    status: 'active',
    role: 'user',
    joinDate: '2024-01-15',
    tradingVolume: '$45,230',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    status: 'active',
    role: 'admin',
    joinDate: '2024-01-10',
    tradingVolume: '$123,450',
  },
];

const AdminUsers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg flex items-center">
          <UsersIcon className="w-4 h-4 mr-2" />
          Add User
        </button>
      </div>

      <div className="bg-dark-400 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-dark-300">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold">User</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Role</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Join Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Trading Volume</th>
              <th className="px-6 py-3 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-300">
            {mockUsers.map((user) => (
              <tr key={user.id} className="hover:bg-dark-300">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
                      {user.name.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.role === 'admin' ? 'bg-primary-600' : 'bg-gray-600'
                  }`}>
                    {user.role.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    user.status === 'active' ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {user.status.toUpperCase()}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">{user.joinDate}</td>
                <td className="px-6 py-4 text-sm">{user.tradingVolume}</td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-white">
                      <Mail className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-white">
                      <Shield className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-red-500">
                      <Ban className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;