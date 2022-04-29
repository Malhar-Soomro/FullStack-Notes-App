import React from 'react'
import './index.css';
import { StylesProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import { auth } from "./firebase"


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import NotesPage from "./components/NotesPage"
import CreatePage from "./components/CreatePage"


function App() {
  const user = JSON.parse(localStorage.getItem('data'));

  return (
    <StylesProvider injectFirst>
      <Router>
        <Navbar />
        <Home>
          <Routes>
            <Route exact path="/" element={<NotesPage />} />
            <Route exact path="/create" element={<CreatePage />} />
          </Routes>
        </Home>
        <Routes>

          {/* <Route exact path="/" element={<Home />}>
          </Route> */}

          <Route exact path="/login" element={!user ? <Login /> : <Home />} />

          {user ?
            <Route exact path="/" element={<Home />} /> :
            <Route exact path="/signUp" element={!user ? <SignUp /> : <Home />} />}

        </Routes>
      </Router>
    </StylesProvider>
  );
}

export default App;
