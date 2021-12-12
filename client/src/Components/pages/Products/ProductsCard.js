import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductService from '../../../services/product.service'
import './productCard.css'

const productService = new ProductService()
                  

const ProductCard = ({imageUrl, name, price, status, categorie, cityProduct, _id, refreshProducts}) => {
  
  const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  
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

    <Card  className="card-type" style={{ width: '19rem' }}>
      <Card.Img variant="top" src={imageUrl} style={{width: "100%", height: "150px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>
        <Card.Subtitle>
          {price}€/h {capitalizeFirstLetter(status)}
         </Card.Subtitle> 
          <Card.Text>
          {capitalizeFirstLetter(categorie)}
          </Card.Text>
          <Card.Text>
          {capitalizeFirstLetter(cityProduct)}
          </Card.Text>

        <Link  to={`/create-request/${_id}`}>
          <Button className="boton-type" variant="secondary">Alquilar</Button>
        </Link>

        <Link  to={`/products/details-product/${_id}`}>
          <Button className="boton-type"variant="secondary">Details</Button>
        </Link>
        
          <Button onClick={(e) => handleDelete(e, _id)} className="boton-type" variant="secondary">Delete</Button>
        
      </Card.Body>
    </Card>
  )
}

export default ProductCard