// Import the core React library — enables JSX and component functionality.
import React from 'react';

// Import ReactDOM for rendering React components into the browser DOM.
import ReactDOM from 'react-dom/client';

// Import the main App component, which serves as the root of the application.
import App from './App';

// Import global CSS styles for the application.
import './index.css';

// Create a root DOM node where the React app will be mounted.
// 'document.getElementById("root")' refers to the <div id="root"></div> in index.html.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React’s StrictMode.
// StrictMode helps identify potential problems in an application during development.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
