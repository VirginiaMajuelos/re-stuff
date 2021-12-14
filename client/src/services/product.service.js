import axios from 'axios'

class ProductService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/products',
      withCredentials: true
    })
  }

  getAllProducts = () => this.app.get("/")
  getProductsByOwner = (id) => this.app.get (`/owner/${id}`)
  getProductsSearch = (name, city) => this.app.get(`/product/${name}/${city}`)
  getOneProduct = (id) => this.app.get(`/details-product/${id}`)
  createProduct = (productData) => this.app.post("/create-new-product", productData)
  editProduct = (id, data) => this.app.put (`/edit-product/${id}`, data)
  deleteProduct = (id) => this.app.delete (`/delete-product/${id}`)
  favoriteProduct = (id) => this.app.put (`/push-favorite/${id}`)
}

export default ProductService