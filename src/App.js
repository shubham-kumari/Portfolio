import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cv from './Components/Cv';
import About from './Components/About';
import GoToTop from './Components/GoToTop';







function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <GoToTop />
    </BrowserRouter>
  );
}

export default App;