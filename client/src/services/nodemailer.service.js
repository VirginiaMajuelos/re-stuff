import axios from 'axios'

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: 'http://localhost:5005',
      withCredentials: true
    })
  }

  sendEmail = (idRequest, isAccepted) => this.app.post("/send-email", {idRequest, isAccepted })
 
}

export default AuthService