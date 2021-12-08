import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductService from "../../../services/product.service";

class ProductDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

      const { imageUrl, name, description, status, categorie, cityProduct, postCode, owner } = response.data
      this.setState({ imageUrl, name, description, status, categorie, cityProduct, postCode, owner })
    })
    .catch(err => console.log(err))
}

  render(){
    const {imageUrl, name, description, status, categorie, cityProduct, postCode, owner } = this.state

    return (
      <Container>
        <h1>Detalles</h1>
      
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
              <p>{owner}</p>
              </article>

          </Col>
        </Row>
      </Container>
    )
  }

}

export default ProductDetails