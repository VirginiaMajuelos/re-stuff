import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import { ProductsList } from '../Products/ProductsList'


class ProductPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
    
    }
  }



  render(props) {
    return (
      <Container>
      <Row>
        <ProductsList/>
        </Row>
      </Container>
    )
  }

}

export default ProductPage