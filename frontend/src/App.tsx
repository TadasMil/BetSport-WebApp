import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Layout } from './components/UI/Layout/Layout';
import { Routes } from './routes/Routes';

function App() {
  return (
    <>
      <NavBar />
      <Layout>
        <Routes>

        </Routes>
      </Layout>
    </>
  );
}

export default App;
