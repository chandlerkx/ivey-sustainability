import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import OurTeam from './pages/OurTeam';
import NoPage from './pages/NoPage';
import Header from './components/Header';
import Media from './pages/Media'
import Contact from './pages/Contact'
import { BottomNavigation } from '@mui/material';
import Footer from './components/Footer';
import Past from './pages/Past'
import './styles/App.css'
import Header2 from './components/Header2';



function App() {
  return (

    <div>

      <Header2></Header2>

      <Routes>
        <Route index element={<Home />} />
        <Route path="upcoming" element={<Events />} />
        <Route path="ourteam" element={<OurTeam />} />
        <Route path="media" element={<Media/>} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="past" element={<Past/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
