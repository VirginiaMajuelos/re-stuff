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
import logo from '../../../img/logo.png'

class Home extends Component {
  constructor(props) {
    super(props)

	this.state = {
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
      <section className="section1" >
       <img src={logo} alt="logo" style={{width:'25%'}} />
       <h1 className="gradient">Re-Stuff</h1>
       
        <main class="main-home">
          <h3>Rent me! <span>or</span> You can rent products that you don´t use</h3>
          <SearchBar searchProduct={()=>this.searchProduct}/>
      {/* <ProductList refreshProducts={this.refreshProducts} products={this.state.products} /> */}
      {/* <SearchCity onCity={()=>this.onCity}/> */}
        </main> 
      
      </section>

      <section className="section2">

      <ProductsPage products={this.state.props} storeUser={this.storeUser} />
      </section>

      <section className="section1">
          <h1 className="textTitle">How does it work?</h1> <hr className="list"></hr>

        <div style={{ display:'flex', flexDirection: 'row' }}>
            <Card style={{ margin:'10px' }}>
                  <Card.Img variant="top" src={image01}  style={{ width:'85%', paddingLeft:'5%'}}/>
                <Card.Body>
                <Card.Title>Reuse</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              
            </Card>

            <Card style={{ margin:'10px' }} >
            <Card.Img variant="top" src={image02}  style={{ width:'85%', paddingLeft:'5%'}}/>
              <Card.Body>
                <Card.Title>Security</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ margin:'10px' }}>
            <Card.Img variant="top" src={image03}  style={{ width:'85%', paddingLeft:'5%'}}/>
              <Card.Body>
                <Card.Title>Life Change</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
       </div>
     
      </section>
    </>
  )
}
}
export default Home