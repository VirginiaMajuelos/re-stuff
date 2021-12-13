import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import RequestCard from './RequestCard'
import RequestService from '../../../services/request.service'


class RequestPage extends Component {
  constructor() {
    super()

    this.state = {
      request: []
    
    }

 this.service = new RequestService()
  }
 componentDidMount() {
  this.refreshRequest()
  }
  
 refreshRequest = () => {
     this.service.getRequest()
       .then(response => {
        const request = response.data
        this.setState({ request: request })
       })
       .catch(err => console.log(err))
   }
  
 render() {
    return (
      <Container >
      <h1 className="textTitle">Your request</h1> <hr className="list"></hr>
      {/* <RequestCard refreshProducts={this.refreshRequest} request={this.state.request} /> */}
      </Container>
    )
  }
}

export default RequestPage