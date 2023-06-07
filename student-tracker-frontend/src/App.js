import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./components/Navigationbar";
import Home from "./pages/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addstudent" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
        </Routes>
        
      </Router>
    </React.Fragment>
  );
}

export default App;
