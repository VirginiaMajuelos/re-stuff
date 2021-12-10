import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProductService from "../../../services/product.service";

class ProductEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      imageUrl:"",
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

openModal = () => {
  this.setState({
    showModal: true
  })
}

closeModal = () => {
  this.setState({
    showModal: false
  })
}

componentDidMount() {
  const id = this.props.match.params.id

  this.service.getOneProduct(id)
    .then(response => {

      const { imageUrl, name, description, status, categorie, cityProduct, postCode, owner } = response.data
      this.setState({ imageUrl, name, description, status, categorie, cityProduct, postCode, owner })
    })
    .catch(err => console.log(err))
}

  handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state)

  this.service.editProduct(this.props.loggedUser._id, this.state)
    .then(response => {
      console.log(response)
      this.props.storeUser(response.data);
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
        <h1>Edit</h1>
      
        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: "hidden" }}>
          <img src={imageUrl} alt={name}/>
            <article>
              <h2>{name} {description}</h2>
              
              <p>{status}</p>
              <p>{categorie}</p>
              <p>{description}</p>
              <p>{cityProduct}</p>
              <p>{postCode}</p>
              <p>{owner}</p>
              
              
            </article>
          </Col>
          <Col md={4}>
          <Button onClick={this.openModal} variant="primary">Editar Producto</Button>

          </Col>
        </Row>

       </Container>
    
    )
  }

}

export default ProductEdit