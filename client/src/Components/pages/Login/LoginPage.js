import React, { Component } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import AuthService from "../../../services/auth.service";
import "./LoginPage.css";
import image from "../../../img/img.png";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.authService = new AuthService();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.authService
      .login(this.state.email, this.state.password)
      .then((response) => {
        this.props.storeUser(response.data);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err.response.data.message));
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container sytle={{ backgroundColor: "f9f8ee" }}>
        <Row style={{ marginTop: "100px" }}>
          <Col className="container-login" s={{ span: 4, offset: 4 }}>
            <h2 className="text">Login</h2>

            <hr className="text" />

            <Form className="container" onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.email}
                  name="email"
                  type="text"
                  placeholder="Email"
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

              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col classname="imagen-login" s={6}>
            <img src={image} alt="logo" style={{ width: "80%" }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginPage;
