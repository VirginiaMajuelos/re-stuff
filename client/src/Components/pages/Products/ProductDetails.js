import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import ProductService from "../../../services/product.service";
import UploadService from "../../../services/upload.service";
import "./ProductDetails.css";
import imgback from "../../../img/arrow.png";
import NewReview from "../Review/NewReview";
import ReviewService from "../../../services/review.service";

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      imageUrl: "",
      name: "",
      price: "",
      description: "",
      status: "",
      categorie: "",
      cityProduct: "",
      postCode: "",
      owner: "",

      mostrar: false,
      loading: false,
    };

    this.service = new ProductService();
    this.uploadService = new UploadService();
    this.reviewService = new ReviewService();
  }

  capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

  componentDidMount() {
    const id = this.props.match.params.id;
    this.service
      .getOneProduct(id)
      .then((response) => {
        const {
          _id,
          imageUrl,
          name,
          description,
          status,
          categorie,
          cityProduct,
          postCode,
          owner,
        } = response.data;
        this.setState({
          _id,
          imageUrl,
          name,
          description,
          status,
          categorie,
          cityProduct,
          postCode,
          owner,
        });
        console.log(this.state.owner?._id, this.props.loggedUser?._id);
      })
      .catch((err) => console.log(err));
  }

  refreshReview = () => {
    this.reviewService
      .getReview()
      .then((response) => {
        // const this.state.review = response.data
        const filteredProducts = response.data.filter(
          (review) => review.idProduct === this.props.productId
        );
        console.log("vamos a refresh", filteredProducts);
        this.setState({ productReviews: filteredProducts });
      })
      .catch((err) => console.log(err));
  };

  openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.service
      .editProduct(this.state._id, this.state)
      .then((response) => {
        this.state.storeUser(response.data);
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleUploadChange = (e) => {
    this.setState({ ...this.state, loading: true });

    const uploadData = new FormData();
    uploadData.append("imageData", e.target.files[0]);

    this.uploadService
      .uploadImage(uploadData)
      .then((response) =>
        this.setState({
          imageUrl: response.data.cloudinary_url,
          loading: false,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    const {
      imageUrl,
      name,
      description,
      status,
      categorie,
      cityProduct,
      postCode,
      owner,
    } = this.state;

    return (
      <Container>
        <h1 className="textTitle">Details</h1> <hr className="list"></hr>
        <Row className="details">
          <Col md={4}>
            <img src={imageUrl} alt={name} />
          </Col>
          <Col className="column1" md={7}>
            <article className="textColumn">
              <p className="name">{name} </p>
              <p>
                <span>Description: </span>
                {this.capitalizeFirstLetter(description)}
              </p>
              <p>
                <span>Status: </span>
                {this.capitalizeFirstLetter(status)}
              </p>
              <p>
                <span>Categorie: </span>
                {this.capitalizeFirstLetter(categorie)}
              </p>
              <p>
                <span>City: </span>
                {this.capitalizeFirstLetter(cityProduct)}
              </p>
              <p>
                <span>Post Code: </span>
                {postCode}
              </p>
              <p>
                <span>Owner: </span>
                {owner.username}
              </p>

              {this.state.owner?._id !== this.props.loggedUser?._id ? (
                <>
                  <Button as={Link} variant="secondary" to={"/products"}>
                    <img src={imgback} alt="back" style={{ width: "10px" }} />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={this.openModal}
                    style={{ margin: "10px" }}
                    variant="secondary"
                  >
                    Editar Producto
                  </Button>
                  <Button as={Link} variant="secondary" to={"/products"}>
                    <img src={imgback} alt="back" style={{ width: "10px" }} />
                  </Button>
                </>
              )}
            </article>
          </Col>

          <Col md={12} lg={12} className="column2">
            <hr></hr>
            <NewReview
              history={this.props.history}
              productId={this.state._id}
              reviewOwner={this.props.loggedUser}
            />
          </Col>
        </Row>
        <Modal show={this.state.showModal}>
          <Modal.Header onClick={this.closeModal}>
            <Modal.Title>Formulario de Edición del Producto:</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Imagen</Form.Label>
                <Form.Control
                  onChange={this.handleUploadChange}
                  name="imageUrl"
                  type="file"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Status</Form.Label>
                <Form.Select
                  onChange={this.handleInputChange}
                  aria-label="Floating label select example"
                  name="status"
                >
                  <option>Escoge el estado</option>
                  <option value="AVAILABLE">Disponible</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.name}
                  name="name"
                  type="text"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.price}
                  name="price"
                  type="number"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descrición</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.description}
                  name="description"
                  type="text"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="cityProduct">
                <Form.Label>Provincia</Form.Label>
                <Form.Select
                  onChange={this.handleInputChange}
                  aria-label="Floating label select example"
                  name="cityProduct"
                >
                  <option>Seleccionar provincia</option>
                  <option value="ÁLAVA">Álava</option>
                  <option value="ALBACETE">Albacete</option>
                  <option value="ALICANTE">Alicante</option>
                  <option value="ALMERÍA">Almería</option>
                  <option value="ASTURIAS">Asturias</option>
                  <option value="ÁVILA">Ávila</option>
                  <option value="BADAJOZ">Badajoz</option>
                  <option value="BARCELONA">Barcelona</option>
                  <option value="BURGOS">Burgos</option>
                  <option value="CÁCERES">Cáceres</option>
                  <option value="CÁDIZ">Cádiz</option>
                  <option value="CANTABRIA">Cantabria</option>
                  <option value="CASTELLÓN">Castellón</option>
                  <option value="CIUDAD REAL">Ciudad Real</option>
                  <option value="CÓRDOBA">Córdoba</option>
                  <option value="LA CORUÑA">La Coruña</option>
                  <option value="CUENCA">Cuenca</option>
                  <option value="GERONA">Gerona</option>
                  <option value="GRANADA">Granada</option>
                  <option value="GUADALAJARA">Guadalajara</option>
                  <option value="GUIPÚZCOA">Guipúzcoa</option>
                  <option value="HUELVA">Huelva</option>
                  <option value="HUESCA">Huesca</option>
                  <option value="BALEARES">Baleares</option>
                  <option value="JAÉN">Jaén</option>
                  <option value="LEÓN">León</option>
                  <option value="LÉRIDA">Lérida</option>
                  <option value="LUGO">Lugo</option>
                  <option value="MADRID">Madrid</option>
                  <option value="MÁLAGA">Málaga</option>
                  <option value="MURCIA">Murcia</option>
                  <option value="NAVARRA">Navarra</option>
                  <option value="ORENSE">Orense</option>
                  <option value="PALENCIA">Palencia</option>
                  <option value="LAS PALMAS">Las Palmas</option>
                  <option value="PONTEVEDRA">Pontevedra</option>
                  <option value="LA RIOJA">La Rioja</option>
                  <option value="SALAMANCA">Salamanca</option>
                  <option value="SEGOVIA">Segovia</option>
                  <option value="SEVILLA">Sevilla</option>
                  <option value="SORIA">Soria</option>
                  <option value="TARRAGONA">Tarragona</option>
                  <option value="SANTA CRUZ DE TENERIFE">
                    Santa Cruz de Tenerife
                  </option>
                  <option value="TERUEL">Teruel</option>
                  <option value="TOLEDO">Toledo</option>
                  <option value="VALENCIA">Valencia</option>
                  <option value="VALLADOLID">Valladolid </option>
                  <option value="VIZCAYA">Vizcaya</option>
                  <option value="ZAMORA">Zamora</option>
                  <option value="ZARAGOZA">Zaragoza</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="categorie">
                <Form.Label>Categoria</Form.Label>
                <Form.Select
                  onChange={this.handleInputChange}
                  aria-label="Floating label select example"
                  name="categorie"
                >
                  <option>Selecciona la categoria</option>
                  <option value="TECNOLOGIE">Tecnologia</option>
                  <option value="SPORTS">Deporte</option>
                  <option value="FURNITURE">Mobilario</option>
                  <option value="GAMES">Juegos</option>
                  <option value="CULTURE">Cultura</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="postCode">
                <Form.Label>Código postal</Form.Label>
                <Form.Control
                  onChange={this.handleInputChange}
                  value={this.state.postCode}
                  name="postCode"
                  type="number"
                />
              </Form.Group>

              <Button
                variant="secondary"
                style={{ margin: "10px" }}
                onClick={this.closeModal}
              >
                Cerrar
              </Button>

              <Button
                variant="secondary"
                type="submit"
                onClick={this.closeModal}
              >
                Guadar cambios{" "}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default ProductDetails;
