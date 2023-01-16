import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Dashboard</h1>
      <div className="links">
        <Link
          to="/"
          style={{
            color: "white",
            fontSize: "17px",
            // backgroundColor: "salmon",
            backgroundColor: 'darkslateblue',
            borderRadius: "8px",
            padding: '8px',
          }}
        >
          All Hotels
        </Link>
        <Link
          to="/create"
          style={{
            color: "white",
            fontSize: "17px",
            // backgroundColor: "salmon",
            backgroundColor: 'darkslateblue',
            borderRadius: "8px",
            padding: '8px',
          }}
        >
          New Hotels
        </Link>
      </div>
    </nav>
  );
}
