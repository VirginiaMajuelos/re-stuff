import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import AuthService from "../../../services/auth.service";
import "./SignupPage.css";
import image from "../../../img/reutiliza.png";

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: "",
      bankAccount: "",
    };

    this.authService = new AuthService();
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.authService
      .signup(
        this.state.email,
        this.state.username,
        this.state.password,
        this.state.bankAccount
      )
      .then((response) => {
        this.props.storeUser(response.data);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <Row style={{ marginTop: "25px" }}>
          <Col className="container-signup" xs={5}>
            <h2 className="text">Sign Up</h2> <hr></hr>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  name="email"
                  type="email"
                  placeholder="Write your email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.username}
                  name="username"
                  type="text"
                  placeholder="Choose a username"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="bankAccount">
                <Form.Label>Bank Account</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.bankAccount}
                  name="bankAccount"
                  type="text"
                  placeholder="Please write your bank accout"
                />
              </Form.Group>

              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={7}>
            <img src={image} alt="logo" style={{ marginTop: "70px" }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupPage;
