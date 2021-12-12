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
        }
        this.productService = new ProductService(); 
        this.requestService = new RequestService(); 
}



componentDidMount () {
  console.log(this.props)
    this.productService.getProductsByOwner(this.props.loggedUser?._id)
    .then(response => {
       this.requestService.getRequest(this.props.loggedUser?._id)
       .then(res => {
         console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
         //res.data.map(elm => {console.log(elm)})
         this.setState({requests: res.data,  products: response.data })
       })
       .catch(err => console.log(err))
    }) 
    .catch(err => console.log(err))
     this.refreshProducts()
  }

// Accept = () => {
  
//     console.log("id request",this.state.isAccept)
//     console.log("id producto", this.state.status)
//         // this.setState({isAccept: "ACCEPTED", status: "RENTED" })      
//     // this.productService.editProduct(this.state.idRequest, {isAccept: "ACCEPTED"})    
//     this.requestService.editRequestStatus(this.state.idRequest, this.state.idProduct )    
    
//     console.log("despues id request",this.state.isAccept)
//     console.log("despues id producto", this.state.status)
    
//   }

  refreshProducts = () => {
    this.service.getAllProducts()
      .then(response => {
       const products = response.data
       this.setState({ products: products })
      })
      .catch(err => console.log(err))
}
  render() {   
        
  return (
<>
    {/* <Button>Request of {this.props.requestOwner.username} about {this.props.idProduct.name}</Button> */}
    <Card style={{ width: '18rem'}}>
        <Card.Body>
            <Card.Title>{this.state.requestOwner.username}</Card.Title>
            <Card.Text>
            <p>{this.state.inicialDate}</p>
            <p>{this.state.finalDate}</p>
            <p>{this.state.comments}</p>
            {/* <p>{this.state.idProduct.name}</p> */}
            
            </Card.Text>
            <Button variant="success" onClick={this.Accept} >Accept</Button>
            <Button variant="danger">Not accept</Button>
        </Card.Body>
    </Card>
</>
  )
  }
}
export default RequestCard