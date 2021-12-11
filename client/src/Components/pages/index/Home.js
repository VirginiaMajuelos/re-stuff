import React from "react";
import {Component} from 'react';
import { Container, Button } from "react-bootstrap";
import ProductService from '../../../services/product.service';
import SearchBar from '../Search/SearchBar';
import ProductList from '../Products/ProductsList';

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
    <Container>
      <h1>Bievenid@ la página Web de EuVir!</h1>
      <p>Una MERN sobre alquiler de productos que ya no usesssss</p>
      <input placeholder="What are you looking for?"/>
      <input placeholder="Where?"/>
      <Button>  Search</Button>

      <div >
      
			<SearchBar searchProduct={()=>this.searchProduct}/>
     {/* <ProductList refreshProducts={this.refreshProducts} products={this.state.products} /> */}
  
      {/* <SearchCity onCity={()=>this.onCity}/> */}

		  </div>
   
    </Container>

    
  )
}
}
export default Home