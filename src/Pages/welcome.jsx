import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function WelcomePage({ isAuthenticated }) {
  return (
    <div className="welcome-page">
      <h1>Welcome to My App</h1>
      <p>Discover amazing features!</p>
      <button>
        {isAuthenticated ? (
          <Link to="/home">Explore</Link> // Redirect to home page if authenticated
        ) : (
          <Link to="/login">Login</Link> // Redirect to login page if not authenticated
        )}
      </button>
    </div>
  );
}

export default WelcomePage;
