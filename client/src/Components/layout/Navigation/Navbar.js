import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

const authService = new AuthService()


const Navigation = ({ loggedUser, storeUser }) => {

  // const navigate = useNavigate()
  const history = useHistory();

  const logout = () => {
    authService.logout()
      .then(response => storeUser(null))
      .then(() => history.push('/'))
      .catch(err => console.log(err))
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Logo</Navbar.Brand> */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Logo</Nav.Link>
          {loggedUser ?
          <>
            <Nav.Link as={"span"} onClick={logout}>Logout</Nav.Link>
            <Nav.Link as={Link} to="/products/create-new-product">New product</Nav.Link>
            <Nav.Link as={Link} to="/profile/:id">Profile</Nav.Link>
            </>
            :
            <>
              
              <Nav.Link as={Link} to="/signup">Registro</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              
            </>
          }
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Navigation