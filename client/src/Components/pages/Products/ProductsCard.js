import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductService from '../../../services/product.service'

const productService = new ProductService()

                    
const ProductCard = ({imageUrl, name, price, status, categorie, cityProduct, _id, refreshProducts}) => {
  
  const handleDelete = (e, _id) => {
    e.preventDefault();
        productService.deleteProduct(_id)
      .then(response => {
        refreshProducts()
        //this.props.history.push("/products")
      })
      .catch(err => console.log(err))
  }

  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} style={{width: "100%", height: "150px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>
          {price}€/h {status}
         </Card.Subtitle> 
          <Card.Text>
          {categorie}
          </Card.Text>
          <Card.Text>
          {cityProduct}
          </Card.Text>

        <Link  to={`/products/rent/${_id}`}>
          <Button variant="primary">Alquilar</Button>
        </Link>

        <Link  to={`/products/details-product/${_id}`}>
          <Button variant="primary">Details</Button>
        </Link>
        <Link onClick={(e) => handleDelete(e, _id)} >
          <Button variant="primary">Delete</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ProductCard