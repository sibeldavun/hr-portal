import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hr from "./pages/HrScreen";
import Techic from "./pages/TechicScreen";
import Home from "./pages/HomeScreen";
import Search from "./pages/Search";
import CandidateDetails from "./pages/CandidateDetails";
import Login from "./pages/Login";
import React,{useContext} from "react";
import AuthContext from './context/AuthContext'

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (

    <Router>
      
      

      <Routes>

        <Route path="/" element={isLoggedIn ? <Home /> : <Login/>}> </Route>
        <Route path="/hr" element={isLoggedIn ? <Hr /> : <Login/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/search" element={isLoggedIn ? <Search /> : <Login/> }></Route>
        <Route exact path="/candidate/:id" element={isLoggedIn ? <CandidateDetails /> : <Login/> } />
        <Route path="/candidate/:id/update" element={isLoggedIn ? <Techic /> : <Login/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
