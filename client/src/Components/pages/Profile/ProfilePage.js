import React, { Component } from 'react'
import { Container, Card, Button, Modal, Form } from 'react-bootstrap' 

class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }
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
    console.log(this.state)
    this.authService.editProfile(this.state)
      .then(response => {
        // this.props.refreshProduct()
        console.log(response)
        this.props.history.push("/")
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
            <Card.Header> </Card.Header>
            <Card.Body>
                <Card.Title>Information</Card.Title>
                <Card.Img variant="top" src={this.props.loggedUser.imageUser} />
                <Card.Text>
                Username:{this.props.loggedUser.username}
                </Card.Text>
                 <Card.Text>
                Email:{this.props.loggedUser.email} 
                </Card.Text>

                <Card.Text>
                Description:{this.props.loggedUser.description} 
                </Card.Text>

                <Card.Text>
                Bank Account:{this.props.loggedUser.bankAccount} 
                </Card.Text>

                <Card.Text>
                City:{this.props.loggedUser.city} 
                </Card.Text>

                <Card.Text>
                Image Profile:{this.props.loggedUser.imageUser} 
                </Card.Text>

                 {this.props.loggedUser.description && <Card.Text>
                Desc:{this.props.loggedUser.description} 
                </Card.Text>}
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
            <Form.Control onChange={this.handleInputChange} value={this.state.description} placeholder={this.props.loggedUser.description} name="email" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="bankAccount">
            <Form.Label>bank Account</Form.Label>
            <Form.Control onChange={this.handleInputChange} value={this.state.bankAccount} placeholder={this.props.loggedUser.bankAccount} name="email" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control onChange={this.handleInputChange} value={this.state.city} placeholder={this.props.loggedUser.city} name="email" type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="imageUser">
            <Form.Label>Image profile</Form.Label>
            <Form.Control onChange={this.handleInputChange} value={this.state.imageUser} placeholder={this.props.loggedUser.imageUser} name="email" type="text" />
          </Form.Group>

        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.closeModal}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={this.closeModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>
        }
      </Container>
    </>
    )
  }

}

export default ProfilePage