import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title'; // Make sure you have this Title component or replace with your own

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For navigating after login success

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Add your authentication logic here (e.g., API call to verify user credentials)
    // For now, we'll just simulate a successful login

    if (email === 'user@example.com' && password === 'password123') {
      // Navigate to the homepage or dashboard after successful login
      navigate('/home');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen pt-14">
      <div className="text-xl sm:text-2xl my-3">
        <Title text1="LOGIN" text2="TO YOUR ACCOUNT" />
      </div>

      <div className="w-full sm:max-w-md p-6 border border-gray-300 rounded-lg shadow-lg">
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <input
            type="email"
            className="w-full border border-gray-300 rounded py-2 px-4"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Password Input */}
          <input
            type="password"
            className="w-full border border-gray-300 rounded py-2 px-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm">{error}</div>}

          {/* Login Button */}
          <div className="w-full text-center">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm w-full"
            >
              LOGIN
            </button>
          </div>
        </form>

        {/* Link to Register Page */}
        <div className="mt-4 text-center">
          <span className="text-sm">
            Don't have an account?{' '}
            <a href="/register" className="text-blue-500 hover:underline">
              Register Here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
