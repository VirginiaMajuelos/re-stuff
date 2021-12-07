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
}

export default AuthService