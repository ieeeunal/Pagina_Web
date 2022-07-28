
import './Styles/app.sass'; 
import './App.css';

import routes from './Helpers/routes'

import LandingPage from './Pages/LandingPage';
import Chapter from './Pages/Chapter';
import ChapterDetails from './Pages/ChapterDetails';
import Login from './Pages/Login';
import NotFound404 from './Pages/NotFound404';

import { Routes, Route } from 'react-router-dom';
import ChangePassword from './Pages/ChangePassword';
import ValidateUser from './Pages/ValidateUser';

export default function App() {
  return (
    <>
      <Routes>
        <Route path={routes.home} element={ <LandingPage /> } />
        <Route path={routes.login} element={ <Login /> } />
        <Route path={routes.identidy} element={ <ValidateUser /> } />
        <Route path={routes.changePassword} element={ <ChangePassword /> } />
        <Route path={routes.chapter} element={ <Chapter /> } />
        <Route
          exact
          strict
          sensitive={false} path={routes.chapterId} element={ <ChapterDetails /> } /> 
        <Route path={routes.notFound} element={ <NotFound404 /> } />
      </Routes>
    </>
  );
}

