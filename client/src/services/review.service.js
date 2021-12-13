import axios from 'axios'

class ReviewService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/reviews',
      withCredentials: true
    })
  }
  
 getReview = () => this.app.get("/all-reviews")
 createReview = (id, data) => this.app.post(`/create-reviews/?id=${id}`, data)
 
}

export default ReviewService