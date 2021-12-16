import React from "react";
import { Component } from "react";
import { Card } from "react-bootstrap";
import ProductService from "../../../services/product.service";
import SearchBar from "../Search/SearchBar";
import ProductsPage from "../Products/ProductsPage";
import "./Home.css";
import image01 from "../../../img/reuse.png";
import image02 from "../../../img/security.png";
import image03 from "../../../img/lifechange.png";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      productsCopy: [],
    };
    this.service = new ProductService();
  }

  componentDidMount() {
    this.refreshProducts();
  }

  refreshProducts = () => {
    this.service
      .getAllProducts()
      .then((response) => {
        const products = response.data;
        this.setState({ products: products, productsCopy: products });
      })
      .catch((err) => console.log(err));
  };

  searchProduct = (searchValue, city) => {
    let filteredProducts = [...this.state.productsCopy];

    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.includes(searchValue) && product.cityProduct.includes(city)
    );

    this.setState({ products: filteredProducts });
  };

  render() {
    return (
      <>
        <section className="section1">
          <h1 className="gradient">Re-Stuff</h1>
          <main class="main-home">
            <h6>
              Rent me! <span>or</span> You can rent products that you don´t use
            </h6>
            <SearchBar searchProduct={this.searchProduct} />
            {/* <ProductList refreshProducts={this.refreshProducts} products={this.state.products} /> */}
            {/* <SearchCity onCity={()=>this.onCity}/> */}
          </main>
        </section>

        <section className="section2">
          <ProductsPage
            products={this.state.products}
            storeUser={this.storeUser}
          />
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ececdcbd"
            fill-opacity="1"
            d="M0,160L48,133.3C96,107,192,53,288,74.7C384,96,480,192,576,224C672,256,768,224,864,192C960,160,1056,128,1152,101.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>

        <section className="section1">
          <h1 className="textTitle">How does it work?</h1>{" "}
          <hr className="list"></hr>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card
              style={{ margin: "10px", display: "flex", alignItems: "center" }}
            >
              <Card.Img
                variant="top"
                src={image01}
                style={{ width: "200px", paddingLeft: "5%" }}
              />
              <Card.Body>
                <Card.Title>Reuse</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{ margin: "10px", display: "flex", alignItems: "center" }}
            >
              <Card.Img
                variant="top"
                src={image02}
                style={{
                  width: "180px",
                }}
              />
              <Card.Body>
                <Card.Title>Security</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ margin: "10px", display: "flex", alignItems: "center" }}
            >
              <Card.Img
                variant="top"
                src={image03}
                style={{
                  width: "180px",
                }}
              />
              <Card.Body>
                <Card.Title>Life Change</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </section>
      </>
    );
  }
}
export default Home;
