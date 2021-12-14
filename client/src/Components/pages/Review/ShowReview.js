import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReviewService from '../../../services/review.service';
import './ShowReview.css'

class showReview extends Component {
    constructor(props) {
      super(props)

      this.state = {
        productReviews: [],
    }

    this.reviewService= new ReviewService()
      }

  componentDidMount () {
    this.reviewService.getReview()
    .then(response => {
     // const this.state.review = response.data
     const filteredProducts = response.data.filter(review => review.idProduct === this.props.productId)
     console.log("aaaaaaaa", filteredProducts)
     console.log("este es el id del producto", this.props.productId)
     this.setState({productReviews: filteredProducts})
    })
    .catch(err => console.log(err))
  }


    //  componentDidMount = () => {
  // this.refreshReview()
  // }
  
//  refreshReview = () => {
//      this.reviewService.getReview()
//        .then(response => {
//          const filteredReview = response.data.filter(el => response.data.some(elm => el.reviewOwner.username === this.props.loggedUser._id))  
//          this.setState({request: filteredReview}) 
//          console.log('que pasa',this.response)
//         })
//        .catch(err => console.log(err))
//    }
 

       render(){
       return (
 <Container >
 <div>                 
     {this.state.productReviews && this.state.productReviews.map((review)=> (
<div className="review">"{review.description}", <br></br>From username: {review.reviewOwner?.username}</div>))}  
</div> 
            

 </Container>
       )  
    }
}

    export default showReview