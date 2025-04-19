// components/Spinner.jsx
import React from 'react';
import './Spinner.css'; // Make sure to create this CSS file

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;