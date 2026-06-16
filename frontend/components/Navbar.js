import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
      <div className="container">
        <a className="navbar-brand" href="/">Volunteer System</a>

        <div>
          <a className="btn btn-outline-light me-2" href="/">Home</a>
          <a className="btn btn-outline-light me-2" href="/register">Register</a>
          <a className="btn btn-outline-light" href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;