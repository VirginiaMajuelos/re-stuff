import React, { Component } from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import ProductService from '../../../services/product.service'
import UploadService from '../../../services/upload.service'

export default class NewProduct extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: {
        imageUrl: "",
        name: "",
        price: 0,
        description: "",
        categorie: "",
        cityProduct: "",
        postCode: 0
      },
      loading: false
    }

    this.productService = new ProductService()
    this.uploadService = new UploadService()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.productService.createProduct({...this.state.product, owner: this.props.loggedUser})
      .then(response => {
        // this.props.refreshProduct()
        this.props.history.push("/products")
      })
      .catch(err => console.log(err))

  }

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({ 
      product: {
        ...this.state.product,
        [name]: value 
      }
    })
  }

    handleUploadChange = (e) => {
    this.setState({ ...this.state.product, loading: true })

    const uploadData = new FormData()
    uploadData.append('imageData', e.target.files[0])

    this.uploadService
      .uploadImage(uploadData)
      .then(response => 
        this.setState({
          product: {
            ...this.state.product,
            imageUrl: response.data.cloudinary_url
          },
          loading: false
        })
      )
      .catch(err => console.log(err))
          }

  render() {
    return (
      <Container style={{padding:"60px"}}>
      <Row>
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="imageUrl">
          <Form.Label>Url de la imagen</Form.Label>
          <Form.Control onChange={this.handleUploadChange} name="imageUrl" type="file" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.product.name} name="name" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.product.price} name="price" type="number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.product.description} name="description" type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cityProduct">
          <Form.Label>City</Form.Label>
           <Form.Select onChange={this.handleInputChange}  aria-label="Floating label select example" name="cityProduct">
              <option>Select your city</option>
              <option value="ÁLAVA">Álava</option>
              <option value="ALBACETE">Albacete</option>
              <option value="ALICANTE">Alicante</option>
              <option value="ALMERÍA">Almería</option>
              <option value="ASTURIAS">Asturias</option>
              <option value="ÁVILA">Ávila</option>
              <option value="BADAJOZ">Badajoz</option>
              <option value="BARCELONA">Barcelona</option>
              <option value="BURGOS">Burgos</option>
              <option value="CÁCERES">Cáceres</option>
              <option value="CÁDIZ">Cádiz</option>
              <option value="CANTABRIA">Cantabria</option>
              <option value="CASTELLÓN">Castellón</option>
              <option value="CIUDAD REAL">Ciudad Real</option>
              <option value="CÓRDOBA">Córdoba</option>
              <option value="LA CORUÑA">La Coruña</option>
              <option value="CUENCA">Cuenca</option>
              <option value="GERONA">Gerona</option>
              <option value="GRANADA">Granada</option>
              <option value="GUADALAJARA">Guadalajara</option>
              <option value="GUIPÚZCOA">Guipúzcoa</option>
              <option value="HUELVA">Huelva</option>
              <option value="HUESCA">Huesca</option>
              <option value="BALEARES">Baleares</option>
              <option value="JAÉN">Jaén</option>
              <option value="LEÓN">León</option>
              <option value="LÉRIDA">Lérida</option>
              <option value="LUGO">Lugo</option>
              <option value="MADRID">Madrid</option>
              <option value="MÁLAGA">Málaga</option>
              <option value="MURCIA">Murcia</option>
              <option value="NAVARRA">Navarra</option>
              <option value="ORENSE">Orense</option>
              <option value="PALENCIA">Palencia</option>
              <option value="LAS PALMAS">Las Palmas</option>
              <option value="PONTEVEDRA">Pontevedra</option>
              <option value="LA RIOJA">La Rioja</option>
              <option value="SALAMANCA">Salamanca</option>
              <option value="SEGOVIA">Segovia</option>
              <option value="SEVILLA">Sevilla</option>
              <option value="SORIA">Soria</option>
              <option value="TARRAGONA">Tarragona</option>
              <option value="SANTA CRUZ DE TENERIFE">Santa Cruz de Tenerife</option>
              <option value="TERUEL">Teruel</option>
              <option value="TOLEDO">Toledo</option>
              <option value="VALENCIA">Valencia</option>
              <option value="VALLADOLID">Valladolid </option>
              <option value="VIZCAYA">Vizcaya</option>
              <option value="ZAMORA">Zamora</option>
              <option value="ZARAGOZA">Zaragoza</option>
        </Form.Select>
        </Form.Group> 

        <Form.Group className="mb-3" controlId="categorie">
          <Form.Label>Categorie</Form.Label>
           <Form.Select onChange={this.handleInputChange} aria-label="Floating label select example" name="categorie">
              <option>Open this select categorie</option>
              <option value="TECNOLOGIE">Tecnologie</option>
              <option value="SPORTS">Sports</option>
              <option value="FURNITURE">Furniture</option>
              <option value="GAMES">Games</option>
              <option value="CULTURE">Culture</option>
        </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="postCode">
          <Form.Label>Post Code</Form.Label>
          <Form.Control onChange={this.handleInputChange} value={this.state.product.postCode} name="postCode" type="number" />
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