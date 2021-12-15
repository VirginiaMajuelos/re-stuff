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

    this.reviewService = new ReviewService()
  }

  componentDidMount() {
    this.filterReviews()
  }

  componentDidUpdate(prevProps) {
    if (this.props.productReviews?.length !== prevProps.productReviews?.length ) {
      this.filterReviews()
    }
  }


  filterReviews() {
    const filteredProducts = this.props.productReviews?.filter(review => review.idProduct === this.props.productId)
    this.setState({ productReviews: filteredProducts })
  }

  render() {
    return (
      <Container>
        <div>
          {this.state.productReviews.map((review) => (
            <div className="review">"{review.description}", <br></br>From username: {review.reviewOwner?.username}</div>))}
        </div>
      </Container>
    )
  }
}

export default showReview