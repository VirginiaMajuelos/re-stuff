import React, { Component } from 'react'
import { Button , Modal} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RequestService from '../../../services/request.service'

class RequestCard extends Component {
    constructor(props) {
        super(props)
        
this.state= {
    inicialDate: "", 
    finalDate: "" , 
    comments: "", 
    isAccept: "", 
    requestOwner: "", 
    idProduct: ""
}
this.requestService = new RequestService ();

  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  componentDidMount () {
      this.requestService.getRequest(this.props.loggedUser?._id)
      .then(response => {
          console.log(response)
          response.data.map(elm => {console.log(elm)})
          this.setState ({request: response.data})
        })
        .catch(err => console.log(err))
    }
    
  render() {   
        
  return (
      <>

    <Button>Request {this.requestOwner}</Button>

    <Modal.Dialog>
        <Modal.Header closeButton>
            <Modal.Title>New Request by:{this.requestOwner}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p>{this.state.inicialDate}</p>
            <p>{this.state.finalDate}</p>
            <p>{this.state.comments}</p>
            <p>{this.state.requestOwner}</p>
            <p>{this.state.idProduct}</p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="success">Accept</Button>
            <Button variant="danger">Not accept</Button>
        </Modal.Footer>
    </Modal.Dialog>

</>

  )
  }
}
export default RequestCard