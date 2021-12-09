import React, { Component } from 'react'
import { Container, Card, Button, Modal, Form } from 'react-bootstrap' 
import AuthService from '../../../services/auth.service'
import ProductService from '../../../services/product.service'
import ProductsCard from '../Products/ProductsCard'
import RequestService from '../../../services/request.service'

class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      description: "",
      bankAccount: "",
      city: "",
      imageUser: "",
      showModal: false,
      products: [],
      request: []
    }

    this.authService = new AuthService();
    this.productService = new ProductService(); 
    this.requestService = new RequestService ();
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
      //response.data.map(elm => {console.log(elm)})
      this.setState({ products: response.data })
    }) 
    .catch(err => console.log(err))

    this.requestService.getRequest(this.props.loggedUser?._id)
    .then(response => {
      console.log(response)
      //response.data.map(elm => {console.log(elm)})
      this.setState ({request: response.data})
    })
    .catch(err => console.log(err))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.authService.editProfile(this.props.loggedUser._id, this.state)
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

  render() {   


  return (
    <>
        <Container>
        { this.props.loggedUser &&
        <>
        <h1>Profile {this.props.loggedUser.username}</h1>
          <Card className="text-center">
            <Card.Header><Card.Title>INFORMATION</Card.Title> </Card.Header>
            <Card.Body>
                <Card.Img variant="top" src={this.props.loggedUser.imageUser} style={{width:'200px', borderRadius: '45px' }}/>
                <Card.Text><br></br>
                Username:{this.props.loggedUser.username}
                </Card.Text>
                 <Card.Text>
                Email:{this.props.loggedUser.email} 
                </Card.Text>

                <Card.Text>
                Bank Account:{this.props.loggedUser.bankAccount} 
                </Card.Text>

                <Card.Text>
                City:{this.props.loggedUser.city} 
                </Card.Text>

                 {this.props.loggedUser.description && <Card.Text>
                Description:{this.props.loggedUser.description} 
                </Card.Text>}

                <Card.Text>Products:
              {/* <ProductsCard products={this.state.products}/>   */}
              
                 </Card.Text>
                  <div style={{display: 'flex', flexDirection: 'row'}}>                 
                    {this.state.products.map(elm => (<ProductsCard key={elm._id} owned={this.props.loggedUser?._id === elm.owner} {...elm} />))}
                  </div>              
                <Card.Text> Request: 

                <div>
                 {this.state.request.map(elm => (elm))}
                </div>

                </Card.Text>

                <Card.Text>
                <h3>Do you want edit your profile?</h3>
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
            <Form.Control onChange={this.handleInputChange} value={this.state.username} placeholder={this.props.loggedUser.username} name="username" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control onChange={this.handleInputChange} value={this.state.description} placeholder={this.props.loggedUser.description} name="description" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bankAccount">
            <Form.Label>bank Account</Form.Label>
            <Form.Control onChange={this.handleInputChange} value={this.state.bankAccount} placeholder={this.props.loggedUser.bankAccount} name="bankAccount" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={this.handleInputChange} value={this.state.city} placeholder={this.props.loggedUser.city} name="city" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="imageUser">
            <Form.Label>Image profile</Form.Label>
            <Form.Control onChange={this.handleInputChange} value={this.state.imageUser} placeholder={this.props.loggedUser.imageUser} name="imageUser" type="text" />
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