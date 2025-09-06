import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, Film, MapPin, Users, BarChart3 } from 'lucide-react';



const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Oh Bhama Ayyo Rama',
      genre: 'Comedy, Drama',
      language: 'Telugu',
      duration: '2h 25m',
      rating: 4.2,
      status: 'active',
      releaseDate: '2024-07-11'
    },
    {
      id: 2,
      title: 'The 100',
      genre: 'Action, Thriller',
      language: 'Telugu',
      duration: '2h 15m',
      rating: 3.8,
      status: 'active',
      releaseDate: '2024-07-11'
    }
  ]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-purple-700 mb-2">Admin Dashboard</h1>
        <p className="text-purple-500">Manage movies, theaters, and bookings</p>
      </div>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'movies', label: 'Movies', icon: Film },
            { id: 'theaters', label: 'Theaters', icon: MapPin },
            { id: 'users', label: 'Users', icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-purple-500'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-md p-6 transition-all duration-300">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Film className="h-8 w-8 text-blue-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-purple-500">Total Movies</p>
                  <p className="text-2xl font-semibold text-purple-700">{stats.totalMovies}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-pink-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-purple-500">Total Bookings</p>
                  <p className="text-2xl font-semibold text-purple-700">{stats.totalBookings}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <BarChart3 className="h-8 w-8 text-purple-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-purple-500">Total Revenue</p>
                  <p className="text-2xl font-semibold text-purple-700">{stats.totalRevenue.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Users className="h-8 w-8 text-blue-500" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-purple-500">Active Users</p>
                  <p className="text-2xl font-semibold text-purple-700">{stats.activeUsers}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm">
            <div className="px-6 py-4 border-b border-purple-200">
              <h3 className="text-lg font-semibold text-purple-700">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-sm text-purple-700">New movie "Paradha" added to the system</span>
                  <span className="text-xs text-purple-400">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-purple-700">125 tickets booked for "Oh Bhama Ayyo Rama"</span>
                  <span className="text-xs text-purple-400">4 hours ago</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-purple-700">New theater "PVR Guntur" added</span>
                  <span className="text-xs text-purple-400">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'movies' && (
        <div className="space-y-6">
          {/* Header Actions */}
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-purple-700">Movie Management</h2>
            <button
              onClick={() => navigate('/admin/add-movie')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-500 transition-all duration-300 shadow font-semibold flex items-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>Add Movie</span>
            </button>
          </div>

          {/* Movies Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-purple-200">
              <thead className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-500 uppercase tracking-wider">
                    Movie
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Genre
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Language
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {movies.map((movie) => (
                  <tr key={movie.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-purple-700">{movie.title}</div>
                        <div className="text-sm text-purple-400">{movie.duration}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-700">
                      {movie.genre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-700">
                      {movie.language}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-purple-700">
                      {movie.rating}/5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        movie.status === 'active' 
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-pink-100 text-pink-800'
                      }`}>
                        {movie.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-500 hover:text-purple-700 transition-all duration-300">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-purple-500 hover:text-pink-500 transition-all duration-300">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-pink-500 hover:text-blue-500 transition-all duration-300">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'theaters' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Theater Management</h2>
          <p className="text-gray-600">Theater management functionality would be implemented here.</p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>PVR Guntur</li>
            <li>INOX Vijayawada</li>
            <li>Prasads IMAX Hyderabad</li>
            <li>SPI Cinemas Visakhapatnam</li>
            <li>Asian Cinemas Tirupati</li>
            <li>GVK One Hyderabad</li>
            <li>Miraj Cinemas Kurnool</li>
            <li>Amrutha Cinemas Rajahmundry</li>
            <li>Vijaya Cinemas Nellore</li>
            <li>Ramakrishna Cinemas Anantapur</li>
          </ul>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">User  Management</h2>
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Password</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.username}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.password}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
