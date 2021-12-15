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
      imageUser: "",
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
  componentDidMount () {
    
    this.refreshRequests()
    this.refreshProducts()
  }

  refreshRequests = () => {
    this.productService.getProductsByOwner(this.props.loggedUser._id)
    .then(response => {
      this.requestService.getRequest()
      .then(res => {
         console.log('products:', response.data)
         console.log('requests:', res.data)
         const filteredRequest = res.data.filter(el => response.data.some(elm => el.idProduct._id === elm._id) && el.isAccept !== 'ACCEPTED')
         console.log('filtered requests:', filteredRequest)
         this.setState({requests: filteredRequest,  products: response.data })
       })
       .catch(err => console.log(err))
    }) 
    .catch(err => console.log(err))
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

  handleSubmit = (e) => {
    e.preventDefault();
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

  refreshProducts = () => {
    this.productService.getAllProducts()
      .then(response => {
       const products = response.data
       this.setState({ products: products })
      })
      .catch(err => console.log(err))
  }

  render() {   
  return (
    <>
        <Container>
        { this.props.loggedUser &&
        <>
          <Card className="text-center">
            <Card.Header><Card.Title>
            <h1 className="textTitle">Profile:  {this.props.loggedUser.username}</h1> 
            </Card.Title></Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={this.props.loggedUser.imageUser} style={{width:'200px', borderRadius: '45px' }}/>
              
                <Card.Text><span>Username: </span>{this.props.loggedUser.username}</Card.Text>
                
                <Card.Text><span>Email: </span>{this.props.loggedUser.email}</Card.Text>

                <Card.Text><span>Bank Account: </span>{this.props.loggedUser.bankAccount}</Card.Text>

                <Card.Text><span>City: </span>{this.props.loggedUser.city} </Card.Text>

                 {this.props.loggedUser.description && <Card.Text><span>Description: </span>{this.props.loggedUser.description}</Card.Text>}

                 <Card.Text> <h3> Do you want edit your profile?</h3></Card.Text>
                <Card.Text><Button onClick={this.openModal} variant="secondary">Edit profile</Button></Card.Text>

                <Card.Text><span>Products: </span></Card.Text>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>                 
                  {this.state.products.map(elm => (<ProductsCard key={elm._id} owned={this.props.loggedUser?._id === elm.owner} {...elm} />))}
                </div>              
                
                <Card.Text > <span>Requests: </span> </Card.Text>
                <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                 {this.state.requests.map(elm => (elm.idProduct && <RequestCard key={elm._id} loggedUser={this.props.loggedUser} owned={this.props.loggedUser?._id === elm.owner} refreshRequests ={this.refreshRequests} {...elm}/>))}
                </div>
                
                </Card.Body>
                </Card>      
           

          <Modal show={this.state.showModal} >
            <Modal.Header onClick={this.closeModal}>
              <Modal.Title>Edit your user!</Modal.Title>
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

                  <Button style={{margin: '5px' }}variant="secondary" onClick={this.closeModal}>
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