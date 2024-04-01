import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Services from './pages/Services';
import About from './pages/About';
import Home from './pages/Home';
import Nopage from './pages/Nopage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
