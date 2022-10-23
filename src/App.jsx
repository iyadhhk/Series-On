import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SerieInformations from './routes/serie-informations/serie-informations.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='serie/:id' element={<SerieInformations />} />
      </Route>
    </Routes>
  );
};

export default App;
