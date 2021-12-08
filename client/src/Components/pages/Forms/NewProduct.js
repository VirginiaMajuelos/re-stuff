import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
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

    this.productService.createProduct(this.state)
      .then(response => {
        this.props.refreshProduct()
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

        <Form.Group className="mb-3" controlId="categorie">
          <Form.Label>Categorie</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.categorie} name="categorie" type="text" />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="categorie">
          <Form.Label>Categorie</Form.Label>
           <Form.Select aria-label="Floating label select example">
              <option>Open this select categorie</option>
              <option value="1">TECNOLOGIE</option>
              <option value="2">SPORTS</option>
              <option value="3">FURNITURE</option>
              <option value="4">GAMES</option>
              <option value="5">CULTURE</option>
        </Form.Select>
        </Form.Group> */}

        {/* <Form.Group className="mb-3" controlId="cityProduct">
          <Form.Label>City</Form.Label>
           <Form.Select aria-label="Floating label select example">
              <option>Open your city</option>
              <option value="1">ÁLAVA</option>
              <option value="2">ALBACETE</option>
              <option value="3">ALICANTE</option>
              <option value="4">ALMERÍA</option>
              <option value="5">ASTURIAS </option>
              <option value="6">ÁVILA</option>
              <option value="7">BADAJOZ</option>
              <option value="8">BARCELONA</option>
              <option value="9">BURGOS</option>
              <option value="10">CÁCERES</option>
              <option value="11">CÁDIZ</option>
              <option value="12">CANTABRIA</option>
              <option value="13">CASTELLÓN</option>
              <option value="14">CIUDAD REAL</option>
              <option value="15">CÓRDOBA</option>
              <option value="16">CORUÑA</option>
              <option value="17">CUENCA</option>
              <option value="18">GERONA</option>
              <option value="19">GRANADA</option>
              <option value="20">GUADALAJARA</option>
              <option value="21">GUIPÚZCOA</option>
              <option value="22">HUELVA</option>
              <option value="23">HUESCA</option>
              <option value="24">BALEARES</option>
              <option value="25">JAÉN</option>
              <option value="26">LEÓN</option>
              <option value="27">LÉRIDA</option>
              <option value="28">LUGO</option>
              <option value="29">MADRID</option>
              <option value="30">MÁLAGA</option>
              <option value="31">MURCIA</option>
              <option value="32">NAVARRA</option>
              <option value="33">ORENSE</option>
              <option value="34">PALENCIA</option>
              <option value="35">LAS PALMAS</option>
              <option value="36">PONTEVEDRA</option>
              <option value="37">LA RIOJA</option>
              <option value="38">SALAMANCA</option>
              <option value="39">SEGOVIA</option>
              <option value="40">SEVILLA</option>
              <option value="41">SORIA</option>
              <option value="42">TARRAGONA</option>
              <option value="43">SANTA CRUZ DE TENERIFE</option>
              <option value="44">TERUEL</option>
              <option value="45">TOLEDO</option>
              <option value="46">VALENCIA</option>
              <option value="47">VALLADOLID</option>
              <option value="48">VIZCAYA</option>
              <option value="49">ZAMORA</option>
              <option value="50">ZARAGOZA</option>
        </Form.Select>
        </Form.Group> */}

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