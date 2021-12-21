# re-stuff

## Website:

Demo: https://re-stuff.herokuapp.com/

## Description:
Website about rental product between people. You can upload to product for rent o rent other products. The search bar allow search products for type or for cities.  The app allow reading review the other user about some products or you can write your review about experience. Also, you can send a request for rent. 

## Technologies:

-HTML 5
-CSS 3
-JAVASCRIPT
-REACT
-MONGO DB
-EXPRESS 
-NODE JS


### Endpoints

| Route                                  | HTTP Verb | Description               |
| -------------------------------------- | --------- | ------------------------- |
| `/`                                    | GET       | Index                     |
| `/auth/signup`                         | GET       | Sign Up                   |
| `/auth/signup`                         | POST      | Sign Up                   |
| `/auth/login`                          | GET       | Login                     |
| `/auth/login`                          | POST      | Login                     |
| `/auth/logout`                         | GET       | Logout                    |
| `/auth/:id`                            | GET       | user-profile              |
| `/auth/edit/:id`                       | GET       | edit-profile              |
| `/auth/edit/:id`                       | POST      | edit-profile              |
| `/auth/delete/:id`                     | DELETE    | delete-profile            |
| `/products`                            | GET       | Products list             |
| `/products/details-product/:id`        | GET       | Products Details          |
| `/products/details-product/review/:id` | GET       | Read Review Product       |
| `/products/details-product/review/:id` | POST      | Review Product            |
| `/products/request-product/:id`        | GET       | Request product           |
| `/products/request-product/:id`        | POST      | Send Request product      |
| `/products/create-new-product`         | POST      | Create new product        |
| `/products/delete/:id`                 | GET       | Delete product            |
| `/products/edit/:id`                   | GET       | Edit product              |
| `/products/edit/:id`                   | POST      | Edit product and upload   |
| `/products/chat`                       | GET       | Reading all chats in user |
| `/products/chat`                       | POST      | Chat between users        |
| `xxxxxxxxxxxxxx`                       | xxxx      | xxxxxxxxxxxxxxxxxxxxx     |

## Aditional info:
This project has been developed by Eunice Santiago y Virginia Majuelos as the final project of Ironhack's Web Development Bootcamp and it has been created in two weeks.


