import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/UI/Footer/Footer';
import { MainWrapper } from './components/UI/Layout/MainWrapper/MainWrapper';
import { Page } from './components/UI/Layout/Page/Page';
import { Routes } from './routes/Routes';
import { Snackbar } from './utilities/Snackbar';

function App() {

  return (
    <>
      <NavBar />
      <Page>
        <Snackbar>
          <Routes>
          </Routes>
        </Snackbar>
        <Footer />
      </Page>
    </>
  );
}

export default App;
