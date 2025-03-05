import { useState } from 'react';
import './App.css';
import Home from './Components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import Navbar from './Components/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product/>} />
      </Routes>
    </div>
  );
}

export default App;
