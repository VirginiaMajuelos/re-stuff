import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import RequestCard from './RequestCard'
import RequestService from '../../../services/request.service'


class RequestPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      request: []
    }

 this.requestService = new RequestService()
  }
 componentDidMount = () => {
  this.refreshRequest()
  }
  
 refreshRequest = () => {
     this.requestService.getRequest()
       .then(response => {
      
        const filteredRequest = response.data.filter(el => response.data.some(elm => el.idProduct.owner === this.props.loggedUser._id) && el.isAccept !== 'ACCEPTED')  
        this.setState({request: filteredRequest}) 
       })
       .catch(err => console.log(err))
   }
  
 render() {
    return (
      <Container >
               <h1 className="textTitle">Your request</h1> <hr className="list"></hr>
                <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                 {this.state.request.map(elm => (elm.idProduct && <RequestCard key={elm._id} loggedUser={this.props.loggedUser} owned={this.props.loggedUser?._id === elm.owner} refreshRequests ={this.refreshRequests} {...elm}/>))}
                </div>
      </Container>
    )
  }
}

export default RequestPage