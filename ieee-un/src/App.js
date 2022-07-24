
import './Styles/app.sass'; 
import './App.css';

import LandingPage from './Pages/LandingPage';
import Chapter from './Pages/Chapter';
import ChapterDetails from './Pages/ChapterDetails';
import Login from './Pages/Login';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="/sign-in" element={ <Login /> } />
        <Route path="/chapter" element={ <Chapter /> } />
        <Route path="/chapter/:id" element={ <ChapterDetails /> } />
        <Route path="*" element={ <div> Error 404 </div> } />
      </Routes>
    </>
  );
}

