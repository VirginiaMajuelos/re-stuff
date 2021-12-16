import axios from "axios";

class AuthService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5005",
      withCredentials: true,
    });
  }

  sendEmail = (idRequest, isAccept, idProduct) =>
    this.app.post("/send-email", { idRequest, isAccept, idProduct });
}

export default AuthService;
