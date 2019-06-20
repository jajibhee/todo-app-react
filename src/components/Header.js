import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App" style={headStyle}>
      <p>TODO APP WITH REACT</p>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </div>
  );
}

const headStyle = {
  textAlign: "center",
  fontSize: "1.2rem",
  color: "white",
  textTransform: "uppercase"
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  cursor: "pointer"
};
export default Header;
