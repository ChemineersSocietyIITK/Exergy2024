import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Competitions from './pages/Competitions';
import Workshops from './pages/Workshops';
import Home from './pages/Home';
import Talks from './pages/Talks';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      {/* <Landing text="EXERGY$ECHOES OF EXOTHERMIA" /> */}
      <Routes>
        <Route path='/Exergy2024' element={<Home />} />
        <Route path='/Exergy2024/competitions' element={<Competitions />} />
        <Route path='/Exergy2024/workshops' element={<Talks />} />
        <Route path='/Exergy2024/talks' element={<Talks />} />
        <Route path='/Exergy2024/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App;
