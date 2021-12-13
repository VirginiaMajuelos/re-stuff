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
        const request = response.data
        console.log(this.props.loggedUser)
        console.log("yoooooooooooooooooooooooooooooooo", response.data[0])

        for (let i=0; i> response.data.length; i++){
          if (this.props.loggedUser._id === response.data[i].idProduct.owner )
          this.setState({ request: request })
          }
        
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