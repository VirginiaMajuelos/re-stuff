import React from "react";
import {Component} from 'react';
import { Card } from "react-bootstrap";
import ProductService from '../../../services/product.service';
import SearchBar from '../Search/SearchBar';
import ProductsPage from '../Products/ProductsPage';
import './Home.css';
import image01 from '../../../img/reuse.png'
import image02 from '../../../img/security.png'
import image03 from '../../../img/lifechange.png'
// import logo from '../../../img/logo.png'

class Home extends Component {
  constructor(props) {
    super(props)

	this.state = {
    products: [],
    productsCopy: []
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
          this.setState({ products: products, productsCopy: products })
         })
         .catch(err => console.log(err))
   }
   
	searchProduct = (searchValue, city) => {
    let filteredProducts = [...this.state.productsCopy];
  
    filteredProducts = filteredProducts.filter(product => product.name.includes(searchValue) && product.cityProduct.includes(city))

    this.setState({products: filteredProducts})
	}


	render() {
  return (
    <>
      <section className="section1" >
      {/* <h1 className='gradient'>Re-Stuff</h1> */}
       {/* <img src={logo} alt="logo" style={{width:'25%'}} /> */}
        <main class="main-home">
          <h3>Rent me! <span>or</span> You can rent products that you don´t use</h3>
          <SearchBar searchProduct={this.searchProduct} />
      {/* <ProductList refreshProducts={this.refreshProducts} products={this.state.products} /> */}
      {/* <SearchCity onCity={()=>this.onCity}/> */}
        </main> 
      
      </section>

      <section className="section2">

      <ProductsPage loggedUser={this.props.loggedUser} products={this.state.products} storeUser={this.storeUser} />
      </section>


    </>
  )
}
}
export default Home