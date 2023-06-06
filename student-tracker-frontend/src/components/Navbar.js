import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand p-2" href="#">
            Student Tracker Application
          </a>
          <button className="btn btn-outline-light me-3 p-2">
            ADD STUDENT
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
