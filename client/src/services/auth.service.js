import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:3000',
      withCredentials: true
    })
  }

  signup = (username, email, password, accoutBank) => this.app.post("/signup", { username, email, password, accoutBank })
  login = (email, password) => this.app.post("/login", { email, password })
  logout = () => this.app.get("/logout")
  isloggedin = () => this.app.get("/isloggedin")
}

export default AuthService