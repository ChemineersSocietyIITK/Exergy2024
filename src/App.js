import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Competitions from './pages/Competitions';
import Workshops from './pages/Workshops';
import Home from './pages/Home';
import Talks from './pages/Talks';
import Gallery from './pages/Gallery';
import TalksCard from './components/TalksCard';
function App() {
  return (
    <>
      {/* <Landing text="EXERGY$ECHOES OF EXOTHERMIA" /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/competitions' element={<Competitions />} />
        <Route path='/workshops' element={<Talks />} />
        <Route path='/talks' element={<Talks />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App;
