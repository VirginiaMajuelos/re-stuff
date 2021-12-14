import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProductService from '../../../services/product.service'
import './productCard.css'
import imgdelete from '../../../img/delete.png'
import FavoriteButton from './FavoriteButton'
// import FavoriteButton from './FavoriteButton'


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

    <Card className="card-type" style={{ width: '17rem', margin:'10px' }}>
      <Card.Img variant="top" src={imageUrl} style={{width: "100%", height: "150px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title className='text-card'><p>{capitalizeFirstLetter(name)}</p></Card.Title>
          {/* <Card.Text className='text-card'>
          {capitalizeFirstLetter(categorie)}
          </Card.Text>
          <Card.Text className='text-card'>
          {capitalizeFirstLetter(cityProduct)}
          </Card.Text> */}
        <Card.Text >
         <p> {price}€/h </p>{capitalizeFirstLetter(status)}
         </Card.Text> 
       

        <Link  to={`/create-request/${_id}`}>
          <Button className="boton-type" variant="secondary">Alquilar</Button>
        </Link>

        <Link  to={`/products/details-product/${_id}`}>
          <Button className="boton-type"variant="secondary">Details</Button>
        </Link>
        
          <Button onClick={(e) => handleDelete(e, _id)} className="boton-type" variant="secondary"><img src={imgdelete} alt='delete' style={{width:'20px'}}/></Button>
        
      </Card.Body>
    </Card>
  )
}

export default ProductCard