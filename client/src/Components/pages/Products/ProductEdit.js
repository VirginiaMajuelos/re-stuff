import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductService from "../../../services/product.service";

class ProductDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
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

      const { name, description, status, categorie, cityProduct, postCode, owner } = response.data
      this.setState({ name, description, status, categorie, cityProduct, postCode, owner })
    })
    .catch(err => console.log(err))
}

  render(){
    const {name, description, status, categorie, cityProduct, postCode, owner } = this.state

    return (
      <Container>
        <h1>Edit</h1>
      
        <Row className="justify-content-around">
          <Col md={6} style={{ overflow: "hidden" }}>
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
          </Col>
        </Row>
      </Container>
    )
  }

}

export default ProductDetails