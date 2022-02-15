# RE-STUFF
<img width="1000" alt="re-stuff-landing" src="https://user-images.githubusercontent.com/11834030/154153831-561c7f16-6870-4194-aaa6-8ea69eee55f1.PNG" />

## Description:
Website about rental product between people. You can upload to product for rent o rent other products. The search bar allow search products for type or for cities.  The app allow reading review the other user about some products or you can write your review about experience. Also, you can send a request for rent. 

## Website:

Demo: https://re-stuff.herokuapp.com/

## Technologies:

<ul>
  <li> HTML 5 </li>
<li> CSS 3 </li>
<li> JAVASCRIPT  </li>
<li> REACT </li>
<li> MONGO DB </li>
<li> EXPRESS </li>
<li> NODE JS </li>
 </ul>

## Server Install:

```bash
npm install
```

## Server Usage:

```bash
npm run dev
```
## Client Install:

```bash
npm install
```
## Client Usage:

```bash
npm start
```

## Backend Endpoints

| Route                                  | HTTP Verb | Description               |
| -------------------------------------- | --------- | ------------------------- |
| `/`                                    | GET       | Index                     |
| `/auth/signup`                         | POST      | Sign Up                   |
| `/auth/login`                          | POST      | Login                     |
| `/auth/logout`                         | GET       | Logout                    |
| `/isloggedin`                         | GET       | Check if there is a user login                    |
| `/products`                            | GET       | List all products             |
| `/products/owner/:id`                            | GET       | Find the owner of the product from DB           |
| `/products/details-product/:id`        | GET       | Product Detail from DB         |
| `/products/:name/:city`        | GET       | Product Detail from DB with a specific name and a city         |
| `/products/create-new-product`         | POST      | Create new product        |
| `/products/edit-product/:id`                   | PUT       | Edit product              |
| `/products/delete/:id`                 | DELETE       | Delete product            |
| `/products/push-favorite/:id`                 | PUT       | Add product to favorites           |
| `/requests/all-request` | GET       | List all the request of an user       |
| `/requests/create-request` | POST       | Create request       |
| `/requests/edit-request-status/:id` | PUT       | Edit the status of the request      |
| `/requests/delete-request-status/:id` | DELETE       | Delete request      |
| `/reviews/all-reviews` | GET       | List all the reviews of a product      |
| `/reviews/create` | POST       | Create a review on a product      |
| `/send-email/` | POST       | Send an email of acceptance or denial of a request with Nodemailer    |
| `/upload/image` | POST       | Upload image with cloudinary    |

## Frontend Endpoints

| Route                                  | HTTP Verb | 
| -------------------------------------- | --------- | 
| `/`                                    | Landing Page       |
| `/products/details-product/:id`                         | Renders the details of a product       | 
| `/create-request/:id`                         | Creates a request on the product chosen    | 
| `/login`                         | Renders the login page      | 
| `/signup`                         | Renders the signup page      | 
| `/products`                         | Renders all the products      | 
| `/products/create-new-product`                         | Renders the page ro create new products      | 
| `/requests/all-requests`                         | Renders all the requests of the user that has a session open     | 
| `/profile/:id`                         | Renders the profile of the user with sessions open     | 
| `/logout`                         | Closes the session open and redirects for the landing page without login made      | 


## Aditional info:
This project has been developed by Eunice Santiago y Virginia Majuelos as the final project of Ironhack's Web Development Bootcamp and it has been created in two weeks.


