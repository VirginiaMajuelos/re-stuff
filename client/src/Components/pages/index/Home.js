import React from "react";
import {Component} from 'react';
import { Container } from "react-bootstrap";
import ProductService from '../../../services/product.service';
import SearchBar from '../Search/SearchBar';
// import ProductList from '../Products/ProductsList';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props)

	this.statestate = {
    products: [],
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
   
	searchProduct = (e) => {
		let searchValue = e.currentTarget.value;
		let filteredProducts =  this.state.products.filter(data =>{
			return data.name.toLowerCase().includes(searchValue.toLowerCase()) 
		})
		console.log(filteredProducts)
		this.setState({
			products: filteredProducts 
		})
    this.refreshProducts()
	}

	// onCity = (e) => {
	// 	let value = e.currentTarget.value
	// 	if (value){
	// 		let filteredProducts = this.state.products.filter(data => {
	// 			return data.city
	// 		})
	// 		this.setState({
	// 			products: filteredProducts
	// 		})
	// 	}
	// 	else{
	// 		this.setState({
	// 			products: this.state.products
	// 		})
	// 	}
	// }

	render() {
  return (
    <>
      <section>
      <Container>
        <h1 className="gradient">Re-Stuff</h1>
        <main class="main-home">
          <h2>Rent me!</h2>
          <h5>or</h5>
          <h3>You can rent your product without use</h3>
          <SearchBar searchProduct={()=>this.searchProduct}/>
      {/* <ProductList refreshProducts={this.refreshProducts} products={this.state.products} /> */}
      {/* <SearchCity onCity={()=>this.onCity}/> */}
          
       
        </main> 
      </Container>
      </section>
      <section className="section1">
        <Container>
          <h3>How does it work?</h3>
        </Container>
      </section>
    </>
  )
}
}
export default Home