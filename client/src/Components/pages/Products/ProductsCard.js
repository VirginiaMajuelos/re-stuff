import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProductCard = ({imageUrl, name, price, description, status, categorie, cityProduct}) => {
  return (
    <Card  style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle>
          {price}€/h     {status}
         </Card.Subtitle> 
         <Card.Text>
          {description}
          </Card.Text>
          <Card.Text>
          {categorie}
          </Card.Text>
          <Card.Text>
          {cityProduct}
          </Card.Text>

        <Link to={`/products`}>
          <Button variant="primary">Alquilar</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default ProductCard