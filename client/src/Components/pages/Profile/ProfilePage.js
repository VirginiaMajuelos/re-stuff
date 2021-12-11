import React, { Component } from 'react'
import { Container, Card, Button, Modal, Form } from 'react-bootstrap' 
import AuthService from '../../../services/auth.service'
import ProductService from '../../../services/product.service'
import ProductsCard from '../Products/ProductsCard'
import RequestCard from '../Request/RequestCard'
import RequestService from '../../../services/request.service'
import UploadService from '../../../services/upload.service'


class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user:{
      username: "",
      description: "",
      bankAccount: "",
      city: "",
      imageUser: ""
      },
      showModal: false,
      products: [],
      requests: []
    }

    this.authService = new AuthService();
    this.productService = new ProductService(); 
    this.requestService = new RequestService ();
    this.uploadService = new UploadService()
  }

  openModal = () => {
    this.setState({
      showModal: true
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false
    })
  }

componentDidMount () {
    this.productService.getProductsByOwner(this.props.loggedUser?._id)
    .then(response => {
 
      
       this.requestService.getRequest(this.props.loggedUser?._id)
       .then(res => {
         this.setState({requests: res.data,  products: response.data })
       })
       .catch(err => console.log(err))
    }) 
    .catch(err => console.log(err))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.authService.editProfile(this.props.loggedUser._id, this.state.user)
      .then(response => {
        console.log(response)
        this.props.storeUser(response.data);
      })
      .catch(err => console.log(err))

  }
  handleInputChange = (e) => {
    const { name, value } = e.currentTarget

    this.setState({ [name]: value })
  }

  handleUploadChange = (e) => {
    this.setState({ loading: true })

    const uploadData = new FormData()
    uploadData.append('imageData', e.target.files[0])

    this.uploadService
      .uploadImage(uploadData)
      .then(response => 
        this.setState({
          user: {
            ...this.state.user,
            imageUser: response.data.cloudinary_url
          },
          loading: false
        })
      )
      .catch(err => console.log(err))

          }

  render() {   
  return (
    <>
        <Container>
        { this.props.loggedUser && 
        <>
        
          <Card className="text-center">
            <Card.Header><Card.Title><h1>Profile {this.props.loggedUser.username}</h1></Card.Title> </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={this.props.loggedUser.imageUser} style={{width:'200px', height: '200px', borderRadius: '50%' }}/>
                <Card.Text><br></br>
                Username: {this.props.loggedUser.username}
                </Card.Text>
                 <Card.Text>
                Email: {this.props.loggedUser.email} 
                </Card.Text>
                <Card.Text>
                Bank Account: {this.props.loggedUser.bankAccount} 
                </Card.Text>

                <Card.Text>
                City:{this.props.loggedUser.city} 
                </Card.Text>

                 {this.props.loggedUser.description && 
                 <Card.Text>
                Description:{this.props.loggedUser.description} 
                </Card.Text>}

                <Card.Text>Products:
              {/* <ProductsCard products={this.state.products}/>   */}
              
                 </Card.Text>
                  <div style={{display: 'flex', flexDirection: 'row'}}>                 
                    {this.state.products.map(elm => (<ProductsCard key={elm._id} owned={this.props.loggedUser?._id === elm.owner} {...elm} />))}
                  </div>              
                <Card.Text> Requests: 

                <div>
                 {this.state.requests.map(elm => (<RequestCard key={elm._id} owned={this.props.loggedUser?._id === elm.owner} {...elm}/>))}
                </div>

                </Card.Text>

                <Card.Text>
                Do you want edit your profile?
                </Card.Text>
                    <Button onClick={this.openModal} variant="primary">Editar</Button>
            </Card.Body>
          </Card>

          <Modal show={this.state.showModal} >
              <Modal.Header onClick={this.closeModal}>
                <Modal.Title>Formulario</Modal.Title>
              </Modal.Header>
              <Modal.Body>  
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.user.username} placeholder={this.props.loggedUser.username} name="username" type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.user._iddescription} placeholder={this.props.loggedUser.description} name="description" type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="bankAccount">
                    <Form.Label>Bank Account</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.user.bankAccount} placeholder={this.props.loggedUser.bankAccount} name="bankAccount" type="text" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={this.handleInputChange} value={this.state.user.city} placeholder={this.props.loggedUser.city} name="city" type="text" />
                  </Form.Group>


                  <Form.Group className="mb-3" controlId="imageUser">
                    <Form.Label>Image profile</Form.Label>
                    <Form.Control onChange={this.handleUploadChange} name="imageUser" type="file" />
                  </Form.Group>

                  <Button variant="secondary" onClick={this.closeModal}>
                    Close
                  </Button>
                  <Button variant="primary" type='submit' onClick={this.closeModal}>
                    Save Changes
                  </Button>
                </Form>
              </Modal.Body> 
          </Modal>
        </>
        }
      </Container>
    </>
    )
  }

}

export default ProfilePage