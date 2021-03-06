import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductsCard from './ProductsCard'

class ProductsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
     
    }
  }

  render() {
    return (
      <div>

        <Row>
          {this.props.products.map(elm => {
            return (
              <Col key={elm._id}>
                <ProductsCard {...elm} loggedUser={this.props.loggedUser}  refreshProducts={this.props.refreshProducts} />
              </Col>
                   )
            })
          }
        </Row>
      </div>
    )
  }
}

export default ProductsList
