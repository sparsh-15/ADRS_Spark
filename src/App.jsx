import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Blog from './Pages/Blog';
import Register from './Pages/Register';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
