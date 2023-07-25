import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import OurTeam from './pages/OurTeam';
import NoPage from './pages/NoPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
