import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from './components/NavBar/NavBar';
import { Layout } from './components/UI/Layout/Layout';
import { MainWrapper } from './components/UI/Layout/MainWrapper/MainWrapper';
import { Routes } from './routes/Routes';
import { RootState } from './store/reducers';
import { Snackbar } from './utilities/Snackbar';

function App() {

  return (
    <>
      <NavBar />
      <MainWrapper>
        <Snackbar>
          <Routes>
          </Routes>
        </Snackbar>
      </MainWrapper>
    </>
  );
}

export default App;
