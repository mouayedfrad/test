// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Change this line
import './index.css';
import App from './component/App';

// Create a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(<App />);