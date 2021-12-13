import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReviewService from '../../../services/review.service';

class showReview extends Component {
    constructor(props) {
      super(props)

      this.state = {
        review:[{
        description: "",
        reviewOwner: "",

        }],
    }

    this.reviewService= new ReviewService()
      }

       render(){
       return (
 <Container >
 <div>                 
     {this.state.review && this.state.review.map((review)=> (
<div>{review.description}</div>))}  
</div> 

 </Container>
       )  
    }
}

    export default showReview