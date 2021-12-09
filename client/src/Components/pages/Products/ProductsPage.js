import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import ProductList from './ProductsList'
import ProductService from '../../../services/product.service'


class ProductPage extends Component {
  constructor() {
    super()

    this.state = {
      products: []
    
    }

 this.service = new ProductService()
  }
   componentDidMount() {
  this.refreshProducts()
  }
  
   refreshProducts = () => {
     this.service.getAllProducts()
       .then(response => {
        const products = response.data
        this.setState({ products: products })
       })
       .catch(err => console.log(err))
   }
  
  render() {
    return (
      <Container>
      <h1>Product List</h1>
      <ProductList refreshProducts={this.refreshProducts} products={this.state.products} />
      </Container>
    )
  }

}

export default ProductPage