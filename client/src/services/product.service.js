import axios from 'axios'

class ProductService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:3000/products'
    })
  }

  // getAllCoasters = () => this.app.get("/allProducts")
  // getOneCoaster = (id) => this.app.get(`/product/${id}`)
  // createCoaster = (productData) => this.app.post("/newProduct", productData)
}

export default ProductService