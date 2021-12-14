import React, { Component } from "react";
import {Link} from 'react-router-dom'
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import ReviewService from '../../../services/review.service';
import ShowReview from "../Review/ShowReview";

 class NewReview extends Component {
    constructor(props) {
      super(props)

      this.state = {
        review:[{
        description: "",
        }],

      
      mostrar: false,

    }

    this.reviewService= new ReviewService()
    }


  openReview = () => {
    this.setState({
      mostrar: !this.state.mostrar
    })
  }
  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      
    })
}

 handleSubmitReview = (e) => {
    e.preventDefault();
    this.reviewService.createReview(this.props.productId, this.state.review)
      .then(res => {
        console.log('llego', res)
        // this.props.history.push("/products")
      })
      .catch((err) => console.log(err))
  }

   handelInputChangeReview = (e) => {
  const { name, value } = e.currentTarget
  this.setState({
      review:{
        ...this.state.review,
        [name]: value
      }
  })
  }

  render(){
       return (
           
 <Container >

    <Col ms={12}>
        <Button onClick={this.openReview} variant="secondary" style={{margin: '10px'}}>Review</Button>
        {this.state.mostrar &&
        <Form onSubmit={this.handleSubmitReview}>
        <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control value={this.state.review.description} onChange={this.handelInputChangeReview} name="description" type="text"/>
        <Button variant="secondary" type='submit' style={{margin: '10px'}} onClick={this.closeModal}>Send comments </Button>         
        </Form.Group>
        <ShowReview productId={this.props.productId} reviewOwner={this.props.loggedUser}></ShowReview>
        </Form>}
    </Col>
 </Container>

       )
    }
 }


export default NewReview