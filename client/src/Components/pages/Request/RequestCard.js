import React, { Component } from 'react'
import { Button , Card} from 'react-bootstrap'
import ProductService from '../../../services/product.service'
import RequestService from '../../../services/request.service'

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
}

componentDidMount () {
  console.log(this.props)
}

Accept = () => {   
    this.requestService.editRequestStatus(this.state.idRequest, {isAccept: 'ACCEPTED', idProduct: this.state.idProduct} )
    .then(response => {
      this.props.refreshRequests()
    })
    .catch(err => console.log(err))    
  }

  Deny = (e, _id) => {
    e.preventDefault();
    this.requestService.deleteRequest(this.state.idRequest)
      .then(response => {
        this.props.refreshRequests()
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