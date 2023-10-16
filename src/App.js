import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Practica1 from './Practica1/Practica1';
import Practica2 from './Practica2/Practica2';
import Practica3 from './Practica3/Practica3';
import Practica4 from './Practica4/Practica4';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={'/'}>Práctica 1</Link>
        <Link to={'/practica-2'}>Práctica 2</Link>
        <Link to={'/practica-3'}>Práctica 3</Link>
        <Link to={'/practica-4'}>Práctica 4</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" exact element={<Practica1 />} />
          <Route path="practica-2" element={<Practica2 />} />
          <Route path="practica-3" element={<Practica3 />} />
          <Route path="practica-4" element={<Practica4 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
