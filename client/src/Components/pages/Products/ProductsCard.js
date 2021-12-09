import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({imageUrl, name, price, status, categorie, cityProduct, _id}) => {
  return (

    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl}/>
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
        <Link to={`/products/edit-profile/${_id}`}>
          <Button variant="primary">Editar</Button>
        </Link>
        <Link  to={`/products/details-product/${_id}`}>
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ProductCard