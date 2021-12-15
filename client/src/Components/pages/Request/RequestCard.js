import React, { Component } from 'react'
import { Button , Card} from 'react-bootstrap'
import ProductService from '../../../services/product.service'
import RequestService from '../../../services/request.service'
import NodemailerService from '../../../services/nodemailer.service'

class RequestCard extends Component {
    constructor(props) {
        super(props)
        
    this.state= {
        idRequest: this.props._id,
        idProduct: this.props.idProduct._id,
        isAccept: this.props.isAccept,
        status: this.props.idProduct.status,
        request: undefined,
        products: undefined
      }
      this.productService = new ProductService(); 
      this.requestService = new RequestService(); 
      this.nodemailerService = new NodemailerService();
}

componentDidMount () {
  console.log(this.props)
}

Accept = () => {   
    this.requestService.editRequestStatus(this.state.idRequest, {isAccept: 'ACCEPTED', idProduct: this.state.idProduct} )
    .then(response => {
      this.nodemailerService.sendEmail(this.state.idRequest, {isAccept: 'ACCEPTED', idProduct: this.state.idProduct})
      console.log('aceptadaaaaaaaaaaaaa', response)
      this.props.refreshRequests()
      // Llamar al back a la ruta de enviar correo y pasarle: idRequest, accepted
    })
    .catch(err => console.log(err))    
  }
  
  Deny = (e, _id) => {
    e.preventDefault();
    this.requestService.deleteRequest(this.state.idRequest)
      .then(response => {
        console.log('denegada', response)
        this.nodemailerService.sendEmail(this.state.idRequest, {isAccept: 'DENY', idProduct: this.state.idProduct})
        this.props.refreshRequests()
        // Llamar al back a la ruta de enviar correo y pasarle: idProduct, denied
      })
      .catch(err => console.log(err))
    }

refreshProducts = () => {
    this.productService.getAllProducts()
      .then(response => {
       const products = response.data
       this.setState({ products: products })
      })
      .catch(err => console.log(err))
}
  render() {   
        
  return (
<>
    <Card style={{ width: '50%', margin: '10px'}}>
        <Card.Body>
            <Card.Title>{this.props.requestOwner?.username}</Card.Title>
            <Card.Text>
            <p>{this.props.inicialDate}</p>
            <p>{this.props.finalDate}</p>
            <p>{this.props.comments}</p>
            {/* <p>{this.state.idProduct.name}</p> */}
            
            </Card.Text>
            <Button variant="success" onClick={this.Accept} >Accept</Button>
            <Button variant="danger" onClick={this.Deny}>Not accept</Button>
        </Card.Body>
    </Card>
</>
  )
  }
}
export default RequestCard