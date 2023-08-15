import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import OurTeam from './pages/OurTeam';
import NoPage from './pages/NoPage';
import Header from './Header';
import { BottomNavigation } from '@mui/material';
import Footer from './Footer';



function App() {
  return (

    <div>

      <Header></Header>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="ourteam" element={<OurTeam />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
