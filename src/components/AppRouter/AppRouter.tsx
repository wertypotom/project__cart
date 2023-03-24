import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/About';
import Home from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Store from '../../pages/Store';

function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="store" element={<Store />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
