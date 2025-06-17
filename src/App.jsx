// App.js or your router file
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home'; // Adjust the import path as necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* Your other routes */}
      </Routes>
    </Router>
  );
}

export default App;