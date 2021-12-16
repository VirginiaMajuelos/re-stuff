import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../../../services/auth.service";
import "./Navbar.css";
import { BiBell } from "react-icons/bi";
import swal from "sweetalert";

const authService = new AuthService();

const Navigation = ({ loggedUser, storeUser }) => {
  // const navigate = useNavigate()
  const history = useHistory();

  const logout = () => {
    authService
      .logout()
      .then((response) => storeUser(null))
      .then(() => history.push("/"))
      .catch((err) => console.log(err));
  };

  const showAlert = () => {
    swal({
      text: "See you soon!👋",
    }).then((res) => logout());
  };

  return (
    <Navbar className="nav" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Logo</Navbar.Brand> */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="gradient-nav">
            Re-Stuff
          </Nav.Link>
          {loggedUser ? (
            <>
              <Nav.Link as={"span"} onClick={showAlert}>
                Logout
              </Nav.Link>
              <Nav.Link as={Link} to="/products/create-new-product">
                New product
              </Nav.Link>
              <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={"/requests/all-requests"}
                className="right"
              >
                <BiBell />
              </Nav.Link>
              <Nav.Link
                as={Link}
                to={`/profile/${loggedUser._id}`}
                className="right"
              >
                <img
                  className="user-avatar "
                  src={loggedUser.imageUser}
                  alt="user"
                />
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
