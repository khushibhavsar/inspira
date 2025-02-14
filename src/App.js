import React from "react";
import { Route, Routes } from 'react-router-dom'; // Correct import for React Router v6
import Welcome from './Welcome'; // Import Welcome component
import Profile from './Profile'; // Import Profile component
import Professional from './professional';
import Beginner from './Beginner';
import Tools from './Tools';

function App() {
  return (
      <div className="App">
        <Routes>
          {/* Define the route for the Welcome page */}
          <Route path="/" element={<Welcome />} />

          {/* Define the route for the Profile page */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/Professional" element={<Professional />} />
        <Route path="/Beginner" element={<Beginner />} />
        <Route path="/tools" element={<Tools />} />
        </Routes>
      </div>
  );
}

export default App;

