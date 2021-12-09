import React, { Component } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { Link } from 'react-router-dom'
import ProductService from "../../../services/product.service";

  class ProductDetails extends Component {
    constructor(props) {
      super(props)

      this.state = {
        _id: "",
        imageUrl: "",
        name: "",
        price: "",
        description: "",
        status:"",
        categorie:"",
        cityProduct: "",
        postCode: "",
        owner:"",
      }

    this.service = new ProductService()
  }

  componentDidMount() {
    const id = this.props.match.params.id

    this.service.getOneProduct(id)
     
      .then(response => {
      
        const { _id, imageUrl, name, description, status, categorie, cityProduct, postCode, owner } = response.data
        console.log(owner)
        this.setState({ _id, imageUrl, name, description, status, categorie, cityProduct, postCode, owner })
      
      })
      .catch(err => console.log(err))
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      
    })
}

  handleSubmit = (e) => {
  e.preventDefault();
  console.log("estado antes del edit", this.state)
  this.service.editProduct(this.state._id, this.state)
    .then(response => {
      console.log("estado despues del edit", response)
      this.state.storeUser(response.data);
    })
    .catch(err => console.log(err))

  }
  handleInputChange = (e) => {
  const { name, value } = e.currentTarget

  this.setState({ [name]: value })
  }

  render(){
    const {imageUrl, name, description, status, categorie, cityProduct, postCode, owner } = this.state

    return (
      <Container>
        <h1>Detalles del Producto</h1>
      
        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: "hidden" }}>
            
            <img src={imageUrl} alt={name} style={{width:'100vh'}}/>
             
          </Col>
          <Col md={6}>
            <article>
             <h2>{name} </h2>
             <p>{description}</p>
              <p>{status}</p>
              <p>{categorie}</p>
              <p>{description}</p>
              <p>{cityProduct}</p>
              <p>{postCode}</p>
              <p>{owner.username}</p>
              </article>
              <Button onClick={this.openModal} variant="primary">Editar Producto</Button>


          </Col>
        </Row>
        <Modal show={this.state.showModal} >
        <Modal.Header onClick={this.closeModal}>
          <Modal.Title>Formulario Edit Produtc:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
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
          <Form.Control onChange={this.handleInputChange} value={this.state.postCode} name="postCode" type="number" />
        </Form.Group>

          

          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={this.closeModal}>
            Save Changes
          </Button>
        </Form>
        </Modal.Body>
        
      </Modal>
      
      </Container>
    )
  }

}

export default ProductDetails