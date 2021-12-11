import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import AuthService from '../../../services/auth.service'
import './Navbar.css';

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
    <Navbar className="nav" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Logo</Navbar.Brand> */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Logo</Nav.Link>
          {loggedUser ?
          <>
            <Nav.Link as={"span"} onClick={logout}>Logout</Nav.Link>
            <Nav.Link as={Link} to="/products/create-new-product">New product</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to={`/profile/${loggedUser._id}`}><img className="user-avatar " src={loggedUser.imageUser} alt=""/></Nav.Link>
            <Nav.Link as={Link} to={''}><img className="user-avatar" src="https://i.pinimg.com/736x/5b/8a/dc/5b8adc3eb83c32f7f29757c8e5e09ab8.jpg" alt="bell-icon/"/></Nav.Link>
            {/* <Nav.Link as={Link} to={`/request/${id}`}><img src="" */}
            </>
            :
            <>
              
              <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              
            </>
          }
        </Nav>
      </Container>
    </Navbar>

  )
}

export default Navigation