import React, { useState } from 'react';
import Registration from './components/Registration'; // Update the import path
import Login from './components/Login'; // Update the import path
import Profile from './components/Profile';// Import the Profile component

const App = () => {
  const [currentPage, setCurrentPage] = useState('register');

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  let content;
  switch (currentPage) {
    case 'register':
      content = <Registration onPageChange={() => handlePageChange('login')} />;
      break;
    case 'login':
      content = <Login onPageChange={() => handlePageChange('profile')} />;
      break;
    case 'profile':
      content = <Profile />;
      break;
    default:
      content = <div>Page not found</div>;
  }

  return (
    <div>
      <div>
        <button onClick={() => handlePageChange('register')}>Register</button>
        <button onClick={() => handlePageChange('login')}>Login</button>
      </div>
      {content}
    </div>
  );
};

export default App;
