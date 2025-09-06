import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123";

const AddMovie = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    language: '',
    genre: '',
    poster: null,
    banner: null,
    actress: '',
    director: '',
    musicDirector: '',
    producer: ''
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === 'file') {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data
    console.log('Submitted movie data:', formData);
    // After submission, navigate back to admin dashboard or movies tab
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Admin Login</h2>
          <form
            onSubmit={e => {
              e.preventDefault();
              if (
                loginForm.email === ADMIN_EMAIL &&
                loginForm.password === ADMIN_PASSWORD
              ) {
                setIsAuthenticated(true);
                setLoginError('');
              } else {
                setLoginError('Invalid admin credentials');
              }
            }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={e => setLoginForm({ ...loginForm, email: e.target.value })}
                required
                className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter admin email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-purple-700 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={e => setLoginForm({ ...loginForm, password: e.target.value })}
                required
                className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter admin password"
              />
            </div>
            {loginError && (
              <div className="text-red-500 text-sm text-center">{loginError}</div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-pink-600 transition-colors shadow-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
      <div className="max-w-3xl mx-auto p-6 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-lg shadow-xl mt-8">
        <h2 className="text-2xl font-semibold mb-6 text-purple-700">Add New Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Movie Name */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-purple-700">Movie Name</label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Language */}
          <div>
            <label htmlFor="language" className="block text-sm font-medium text-purple-700">Language</label>
            <input
              type="text"
              name="language"
              id="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Genre */}
          <div>
            <label htmlFor="genre" className="block text-sm font-medium text-purple-700">Type of Movie (Genre)</label>
            <input
              type="text"
              name="genre"
              id="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Poster */}
          <div>
            <label htmlFor="poster" className="block text-sm font-medium text-purple-700">Poster</label>
            <input
              type="file"
              name="poster"
              id="poster"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Banner */}
          <div>
            <label htmlFor="banner" className="block text-sm font-medium text-purple-700">Banner</label>
            <input
              type="file"
              name="banner"
              id="banner"
              accept="image/*"
              onChange={handleChange}
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Actress */}
          <div>
            <label htmlFor="actress" className="block text-sm font-medium text-purple-700">Actress</label>
            <input
              type="text"
              name="actress"
              id="actress"
              value={formData.actress}
              onChange={handleChange}
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Director */}
          <div>
            <label htmlFor="director" className="block text-sm font-medium text-purple-700">Director</label>
            <input
              type="text"
              name="director"
              id="director"
              value={formData.director}
              onChange={handleChange}
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Music Director */}
          <div>
            <label htmlFor="musicDirector" className="block text-sm font-medium text-purple-700">Music Director</label>
            <input
              type="text"
              name="musicDirector"
              id="musicDirector"
              value={formData.musicDirector}
              onChange={handleChange}
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Producer */}
          <div>
            <label htmlFor="producer" className="block text-sm font-medium text-purple-700">Producer</label>
            <input
              type="text"
              name="producer"
              id="producer"
              value={formData.producer}
              onChange={handleChange}
              className="mt-1 block w-full border border-purple-300 rounded-md p-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white shadow-sm hover:shadow-md transition-all duration-300"
            />
          </div>
          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-pink-600 transition-colors shadow-md"
            >
              Add Movie
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default AddMovie;
