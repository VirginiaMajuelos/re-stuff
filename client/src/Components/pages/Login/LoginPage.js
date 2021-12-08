import React, { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service'

class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }

    this.authService = new AuthService()
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.authService.login(this.state.email, this.state.password)
      .then(response => {
        
        this.props.storeUser(response.data)
        this.props.history.push("/")
      })
      .catch(err => console.log(err.response.data.message))
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({ [name]: value })
  }

  render() {
    return (
      (
        <Container>
          <Row>

            <Col md={{ span: 4, offset: 4 }}>
              <h2>Login</h2>

              <hr />

              <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control onChange={this.handleInputChange} value={this.state.email} name="email" type="text" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={this.handleInputChange} value={this.state.password} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>)
    )
  }

}

export default LoginPage
















