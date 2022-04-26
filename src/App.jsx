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
import { logout } from "./redux/actions/auth"
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
    <StylesProvider injectFirst>
      <Router>
        {/* <Navbar /> */}
        <Button
          className="w-64 bg-CreateNewAccount normal-case py-2 mt-2 tracking-wider font-myFont px-8 text-base "
          variant="contained"
          color="primary"
          type="submit"
          onClick={() => dispatch(logout())}
        >
          logout
        </Button>
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
