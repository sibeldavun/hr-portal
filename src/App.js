import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Candidate from "./pages/CandidatesScreen";
import Hr from "./pages/HrScreen";
import Techic from "./pages/TechicScreen";
import Home from "./pages/HomeScreen";
import Search from "./pages/Search";

function App() {
  return (

    <Router>

      <Routes>

        <Route path="/" element={<Home />}> </Route>
        <Route path="/candidate" element={<Candidate />}></Route>
        <Route path="/hr" element={<Hr />}></Route>
        <Route path="/techic" element={<Techic />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
