import axios from 'axios'

class RequestService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005/requests',
      withCredentials: true
    })
  }

//   signup = (email, username, password, bankAccount) => this.app.post("/signup", { username, email, password, bankAccount })
//   login = (email, password) => this.app.post("/login", { email, password })
//   logout = () => this.app.get("/logout")
//   isloggedin = () => this.app.get("/isloggedin")
//   getEditProfile = (id) => this.app.get(`profile/${id}`)
//   editProfile = (id) => this.app.put(`/edit-profile/${id}`)
 createRequest = (data) => this.app.post("/create-request", data)
 getRequest = () => this.app.get(`/all-requests/`)

}

export default RequestService