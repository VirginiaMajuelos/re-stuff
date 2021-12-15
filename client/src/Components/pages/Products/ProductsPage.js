import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import ProductList from './ProductsList'
import ProductService from '../../../services/product.service'
import './ProductsPage.css'

class ProductPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    
    }

 this.service = new ProductService()
  }
 componentDidMount() {
  this.refreshProducts()
  }

  componentDidUpdate(prevProps) {
  if (this.props.products !== prevProps.products) {
    this.setState({products: this.props.products})
  }
 }
  
 refreshProducts = () => {

    if(!this.props.products) {
      this.service.getAllProducts()
        .then(response => {
         const products = response.data
         this.setState({ products: products })
        })
        .catch(err => console.log(err))
    } else {
      this.setState({products: this.props.products})
    }

   }
  
 render() {
    return (
      <Container >
      <h1 className="textTitle">Products</h1> <hr className="list"></hr>
      <ProductList refreshProducts={this.refreshProducts} products={this.state.products} />
      </Container>
    )
  }
}

export default ProductPage