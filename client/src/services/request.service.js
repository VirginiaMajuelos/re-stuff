import axios from 'axios'

class RequestService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/requests',
      withCredentials: true
    })
  }

 createRequest = (data) => this.app.post("/create-request", data)
 getRequest = () => this.app.get("/all-requests")
 editRequestStatus = (id, dataReq) =>this.app.put(`/edit-request-status/${id}`, dataReq)

}

export default RequestService