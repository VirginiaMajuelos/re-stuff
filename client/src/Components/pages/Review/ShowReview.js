import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReviewService from '../../../services/review.service';
import './ShowReview.css'

class showReview extends Component {
    constructor(props) {
      super(props)

      this.state = {
        review:[{
        description: "",
        
        }],
    }

    this.reviewService= new ReviewService()
      }

  componentDidMount () {
    this.reviewService.getReview()
    .then(response=> {
         // const this.state.review = response.data
     console.log(response.data)
      this.setState({review: response.data})
    })
    .catch(err => console.log(err))
  }

       render(){
       return (
 <Container >
 <div>                 
     {this.state.review && this.state.review.map((review)=> (
<div className="review">"{review.description}", <br></br>From: {review.reviewOwner?.username}</div>))}  
</div> 
            

 </Container>
       )  
    }
}

    export default showReview