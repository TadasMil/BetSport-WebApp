import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from './components/NavBar/NavBar';
import { Layout } from './components/UI/Layout/Layout';
import { Routes } from './routes/Routes';
import { RootState } from './store/reducers';
import axios from "./axios/axios"
import { BackEndPoints } from './utilities/BackEndPoints';

function App() {

  const userToken = useSelector((state: RootState) => {
    return state.auth.auth;
  })
  const AuthStr: string = 'Bearer '.concat(userToken!);

  useEffect(() => {
    if (userToken) {
      axios.get(BackEndPoints.getCurrentUser, { headers: { 'Authorization': AuthStr } })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
  }, [userToken])

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
