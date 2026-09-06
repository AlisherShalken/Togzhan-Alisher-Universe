import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import TimelineMap from './pages/TimelineMap';
import Music from './pages/Music';
import Dramas from './pages/Dramas'; // <-- ИМПОРТ

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/map" element={<TimelineMap />} />
        <Route path="/music" element={<Music />} />
        <Route path="/dramas" element={<Dramas />} /> {/* <-- ПУТЬ */}
      </Routes>
    </Router>
  );
}

export default App;