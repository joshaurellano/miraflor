// Hobbies.jsx
import React from 'react';
import './Hobbies.css';

const hobbiesList = [
  {
    name: 'Watching Movies/Series',
    description: 'I enjoy exploring various genres, from action-packed blockbusters to thought-provoking dramas and binge-worthy TV shows.',
  },
  {
    name: 'Cooking/Baking',
    description: 'I love experimenting in the kitchen, trying new recipes, and perfecting classic dishes, especially baking pastries and desserts.',
  },
  {
    name: 'Fitness and Exercise',
    description: 'home workouts is important to me for maintaining a healthy lifestyle.',
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
