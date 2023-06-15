import React,{useContext} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx=useContext(AuthContext)

  // const rtHandler=()=>{
  //   console.log(authCtx.isLoggedIn)
  // }
  return (
    <React.Fragment>
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {!authCtx.isLoggedIn &&<Route path='/auth' element={<AuthPage />} />}
        {authCtx.isLoggedIn && <Route path='/profile' element={<UserProfile />} />}
        <Route />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <button onClick={rtHandler}>prachi</button> */}
    </Layout>
    {/* <button onClick={rtHandler}>Rough</button> */}
    </React.Fragment>
  );
}

export default App;
