import React, { Component } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import ProductService from '../../../services/product.service'

export default class NewProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl: "",
      name: "",
      price: "",
      description: "",
      categorie: "",
      cityProduct: "",
      postCode: "",
    }

    this.productService = new ProductService()
  }

  handleSubmit = (e) => {
    e.preventDefault();
console.log(this.state)
    this.productService.createProduct(this.state)
      .then(response => {
        // this.props.refreshProduct()
        console.log(response)
        this.props.history.push("/")
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
        <Form.Group className="mb-3" controlId="imageUrl">
          <Form.Label>Url de la imagen</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.imageUrl} name="imageUrl" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.name} name="name" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.price} name="price" type="number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.description} name="description" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cityProduct">
          <Form.Label>City Product</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.cityProduct} name="cityProduct" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="postCode">
          <Form.Label>Post Code</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.postCode} name="postCode" type="number" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Row>
      </Container>
    )
  }
}