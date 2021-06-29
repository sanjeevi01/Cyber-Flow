import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">

          {/* Heading */}
          <Link to="/" className="nav-links font-weight-bold h1">
            Allies
          </Link>

          {/* NavLinks */}

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-items">
              <Link
                to="/why"
                className="nav-links font-weight-bold active"
                onClick={closeMobileMenu}
              >
                Why Allies
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/Features"
                className="nav-links font-weight-bold"
                onClick={closeMobileMenu}
              >
                Features
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/Pricing"
                className="nav-links font-weight-bold"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-items">
              <Link
                to="/Contact"
                className="nav-links font-weight-bold"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Ḷogin */}

          <Link
            type="button"
            to="/login"
            className="btn btn--color radius"
            onClick={closeMobileMenu}
          >
            <>
              <Row className="mt-2">
                <Col sm={6}>
                  <p>Login</p>
                </Col>
                <Col sm={1}>
                  <i class="fas fa-sign-in-alt btn--color"></i>
                </Col>
              </Row>
            </>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
