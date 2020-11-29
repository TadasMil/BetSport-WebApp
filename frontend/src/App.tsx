import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from './components/NavBar/NavBar';
import { Routes } from './routes/Routes';
import { RootState } from './store/reducers';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
      </Routes>
    </>
  );
}

export default App;
