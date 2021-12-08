import { Component } from 'react'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/index/Home';
import Navbar from './layout/Navigation/Navbar'
import SignupPage from './pages/Singup/SignupPage'
import LoginPage from './pages/Login/LoginPage';
import AuthService from '../services/auth.service';
import NewProduct from './pages/Forms/NewProduct';
import ProductsPage from './pages/Products/ProductsPage'
import ProductDetails from './pages/Products/ProductDetails';
import ProductEdit from './pages/Products/ProductEdit';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedUser: undefined
    }

    this.authService = new AuthService()
  }

  componentDidMount() {
    this.authService.isloggedin()
      .then(response => this.storeUser(response.data))
      .catch(err => this.storeUser(null))
  }

  storeUser = (user) => {
    this.setState({ loggedUser: user })
  }


  render() {
    return (
      <>
        <Navbar storeUser={this.storeUser} loggedUser={this.state.loggedUser} />

        <main>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/products/create-new-product" exact render={(props) => <NewProduct {...props} loggedUser={this.state.loggedUser} />} />
            <Route path="/products" exact render={(props) => <ProductsPage {...props} storeUser={this.storeUser} />} />
            <Route path="/products/edit-profile/:id" exact render={(props) => <ProductEdit {...props} />} />
            <Route path="/products/request/:id" loggedUser={this.state.loggedUser} exact render={(props) => <ProductDetails loggedUser={this.state.loggedUser} {...props} />} />
            <Route path="/products/details-product/:id" exact render={(props) => <ProductDetails {...props} />} />


            {this.state.loggedUser ?
            <>
              <Redirect to="/" />
             </>
              :
              <>
            <Route path="/signup" render={(props) => <SignupPage {...props} storeUser={this.storeUser} />} />
            <Route path="/login" render={(props) => <LoginPage {...props} storeUser={this.storeUser} />} />
            </>
            }
          </Switch>
          
        </main>

      </>
    )
  }
}

export default App;
