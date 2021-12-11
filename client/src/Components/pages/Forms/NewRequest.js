import React, { Component } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import RequestService from '../../../services/request.service'

export default class NewRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inicialDate: "",
      finalDate: "",
      comments: "",
      requestOwner: "",
      isAccept: "",
      idProduct: ""
    }

    this.requestService = new RequestService()
  }

  componentDidMount = () => this.setState({requestOwner: this.props.loggedUser?._id, idProduct: this.props.match.params.id})

  handleSubmit = (e) => {
    e.preventDefault();
    this.requestService.createRequest(this.state)
      .then(() => {
        this.props.history.push("/products")
      })
      .catch(err => console.log(err))
  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({ [name]: value })
  }

  render() {
    return (
      <Container style={{padding:"60px"}}>
      <Row>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="inicialDate">
          <Form.Label>Fecha de inicio</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.inicialDate} name="inicialDate" type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="finalDate">
          <Form.Label>Fecha fin</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.finalDate} name="finalDate" type="date" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>comments</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.comments} name="comments" type="text" />
        </Form.Group>

        <Button variant="primary" type="submit">Enviar</Button>
      </Form>
      </Row>
      </Container>
    )
  }
}