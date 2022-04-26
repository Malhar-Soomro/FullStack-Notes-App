import './index.css';
import { StylesProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <StylesProvider injectFirst>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route exact path="/" element={<Home />}>
          </Route> */}
          <Route exact path="/login" element={<Login />}>
          </Route>
          <Route exact path="/signUp" element={<SignUp />}>
          </Route>
          {/* <Route exact path="/createPost" element={<CreatePost />}>
          </Route> */}
          {/* <Route exact path="/contact" element={<Contact />}> */}
          {/* </Route> */}
          {/* <Route exact path="/about" element={<About />}>
          </Route> */}
        </Routes>
      </Router>
    </StylesProvider>
  );
}

export default App;
