import React, { Component } from "react";
// import {Link} from 'react-router-dom'
import { Container, Col, Button, Form } from "react-bootstrap";
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

  componentDidMount () {
    this.refreshReview()
  }
   

  openReview = () => {
    this.refreshReview()
    this.setState({
      mostrar: !this.state.mostrar
    })
   
  }
  
    refreshReview = () => {
      this.reviewService.getReview()
      .then(response => {
       // const this.state.review = response.data
       
       const filteredProducts = response.data.filter(review => review.idProduct === this.props.productId)
       console.log("vamos a refresh", filteredProducts)
       this.setState({productReviews: filteredProducts})
     
      })
      .catch(err => console.log(err))
    }
  
 handleSubmitReview = (e) => {
    e.preventDefault();
    this.reviewService.createReview(this.props.productId, this.state.review)
      .then(res => {
        this.setState({
            review:{
              description: ""
            }
        })
       console.log("olaaa", res) 
       this.refreshReview()
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
        {
          this.state.mostrar &&
        <Form onSubmit={this.handleSubmitReview}>
        <Form.Group>
            <Form.Label>Comments</Form.Label>
            <Form.Control value={this.state.review.description} onChange={this.handelInputChangeReview} name="description" type="text"/>
        <Button variant="secondary" type='submit' style={{margin: '10px'}} >Send comments </Button>         
        </Form.Group>
        <ShowReview productReviews={this.state.productReviews} refreshReview={this.refreshReview} productId={this.props.productId} reviewOwner={this.props.loggedUser} onChange={this.refreshReview}></ShowReview>
        </Form>
        }
    </Col>
 </Container>

       )
    }
 }


export default NewReview