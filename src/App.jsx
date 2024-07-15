import React, { useEffect } from 'react';
import Router from './config/Router';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  useEffect(() => {
    const createSprinkle = (x, y) => {
      const sprinkle = document.createElement('div');
      sprinkle.className = 'sprinkle';
      sprinkle.style.left = `${x}px`;
      sprinkle.style.top = `${y}px`;

      // Random values for the animation
      sprinkle.style.setProperty('--random-x', Math.random());
      sprinkle.style.setProperty('--random-y', Math.random());

      document.body.appendChild(sprinkle);

      // Remove the sprinkle after the animation ends
      sprinkle.addEventListener('animationend', () => {
        sprinkle.remove();
      });
    };

    const handleMouseOver = (event) => {
      createSprinkle(event.clientX, event.clientY);
    };

    document.body.addEventListener('mousemove', handleMouseOver);

    // Cleanup event listeners on component unmount
    return () => {
      document.body.removeEventListener('mousemove', handleMouseOver);
    };
  }, []);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
