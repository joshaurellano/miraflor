// Hobbies.jsx
import React from 'react';
import './Hobbies.css';

const hobbiesList = [
  {
    name: '',
    description: '.',
  },
  {
    name: '',
    description: '.',
  },
  {
    name: '',
    description: '.',
  },
  {
    name: '',
    description: '.',
  },
];

const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <h1 className="hobbies-title">My Hobbies</h1>
      <div className="hobbies-list">
        {hobbiesList.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <div className="hobby-info">
              <h2 className="hobby-name">{hobby.name}</h2>
              <p className="hobby-description">{hobby.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
