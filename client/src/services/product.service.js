import axios from 'axios'

class ProductService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/products'
    })
  }

  getAllProducts = () => this.app.get("/")
  getProductsSearch = (name, city) => this.app.get(`/product/${name}/${city}`)
  getOneProduct = (id) => this.app.get(`/details-product/${id}`)
  createProduct = (productData) => this.app.post("/create-new-product", productData)
  editProduct = (id) => this.app.put (`/edit-product/${id}`)
  deleteProduct = (id) => this.app.delete (`/delete-product/${id}`)
}

export default ProductService