import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import for React Router v6
import Welcome from './Welcome'; // Import Welcome component
import Profile from './Profile'; // Import Profile component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the route for the Welcome page */}
          <Route path="/" element={<Welcome />} />

          {/* Define the route for the Profile page */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

