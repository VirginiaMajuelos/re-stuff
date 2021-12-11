import React from "react";
import {Component} from 'react';
import { Container, Button } from "react-bootstrap";
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
          {/* <h4>YOU CAN RENT YOUR PRODUCT WITHOUT USE</h4> */}
          <SearchBar searchProduct={()=>this.searchProduct}/>
      {/* <ProductList refreshProducts={this.refreshProducts} products={this.state.products} /> */}
      {/* <SearchCity onCity={()=>this.onCity}/> */}
          <input class="search-input" type="text" placeholder="What are you looking for?"/>
          <label for="city"></label>
          <select class="search-input2" id="city" name="city">
            <option>Select your city</option>
                <option value="ÁLAVA">Álava</option>
                <option value="ALBACETE">Albacete</option>
                <option value="ALICANTE">Alicante</option>
                <option value="ALMERÍA">Almería</option>
                <option value="ASTURIAS">Asturias</option>
                <option value="ÁVILA">Ávila</option>
                <option value="BADAJOZ">Badajoz</option>
                <option value="BARCELONA">Barcelona</option>
                <option value="BURGOS">Burgos</option>
                <option value="CÁCERES">Cáceres</option>
                <option value="CÁDIZ">Cádiz</option>
                <option value="CANTABRIA">Cantabria</option>
                <option value="CASTELLÓN">Castellón</option>
                <option value="CIUDAD REAL">Ciudad Real</option>
                <option value="CÓRDOBA">Córdoba</option>
                <option value="LA CORUÑA">La Coruña</option>
                <option value="CUENCA">Cuenca</option>
                <option value="GERONA">Gerona</option>
                <option value="GRANADA">Granada</option>
                <option value="GUADALAJARA">Guadalajara</option>
                <option value="GUIPÚZCOA">Guipúzcoa</option>
                <option value="HUELVA">Huelva</option>
                <option value="HUESCA">Huesca</option>
                <option value="BALEARES">Baleares</option>
                <option value="JAÉN">Jaén</option>
                <option value="LEÓN">León</option>
                <option value="LÉRIDA">Lérida</option>
                <option value="LUGO">Lugo</option>
                <option value="MADRID">Madrid</option>
                <option value="MÁLAGA">Málaga</option>
                <option value="MURCIA">Murcia</option>
                <option value="NAVARRA">Navarra</option>
                <option value="ORENSE">Orense</option>
                <option value="PALENCIA">Palencia</option>
                <option value="LAS PALMAS">Las Palmas</option>
                <option value="PONTEVEDRA">Pontevedra</option>
                <option value="LA RIOJA">La Rioja</option>
                <option value="SALAMANCA">Salamanca</option>
                <option value="SEGOVIA">Segovia</option>
                <option value="SEVILLA">Sevilla</option>
                <option value="SORIA">Soria</option>
                <option value="TARRAGONA">Tarragona</option>
                <option value="SANTA CRUZ DE TENERIFE">Santa Cruz de Tenerife</option>
                <option value="TERUEL">Teruel</option>
                <option value="TOLEDO">Toledo</option>
                <option value="VALENCIA">Valencia</option>
                <option value="VALLADOLID">Valladolid </option>
                <option value="VIZCAYA">Vizcaya</option>
                <option value="ZAMORA">Zamora</option>
                <option value="ZARAGOZA">Zaragoza</option>
          </select>
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