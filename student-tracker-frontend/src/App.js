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
    <div style={{ backgroundColor: '#808188', minHeight: '100vh', position: 'absolute', width: '100%' }}>
      <Router>
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addstudent" element={<AddUser />} />
          <Route exact path="/edituser/:id" element={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
