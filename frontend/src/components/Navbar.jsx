import React from "react";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

const Navbar = ({ total }) => {
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 px-3">
      <Link to="/" className="navbar-brand p-1">
        Pizzería Mamma Mia!
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ButtonGroup>
          <Link to="/">
            <Button variant="outline-light" className="ms-2">🍕 Home</Button>
          </Link>
          {token ? (
            <>
              <Link to="/profile">
                <Button variant="outline-light" className="ms-2">🔓 Profile</Button>
              </Link>
              <Button variant="outline-light" className="ms-2">🔒 Logout</Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline-light" className="ms-2">🔐 Login</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-light" className="ms-2">🔐 Register</Button>
              </Link>
            </>
          )}
        </ButtonGroup>
        <Link to="/cart">
          <button className="btn btn-outline-info total-button">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
