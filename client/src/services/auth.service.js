import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005',
      withCredentials: true
    })
  }

  signup = (email, username, password, bankAccount) => this.app.post("/signup", { username, email, password, bankAccount })
  login = (email, password) => this.app.post("/login", { email, password })
  logout = () => this.app.get("/logout")
  isloggedin = () => this.app.get("/isloggedin")
  getEditProfile = (id) => this.app.get(`/profile/${id}`)
  editProfile = (id, data) => this.app.put(`/profile/${id}`, data)
}

export default AuthService