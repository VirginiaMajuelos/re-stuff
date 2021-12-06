# re-stuff

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
| `/products/create-new-products`        | POST      | Create new product        |
| `/products/delete/:id`                 | GET       | Delete product            |
| `/products/edit/:id`                   | GET       | Edit product              |
| `/products/edit/:id`                   | POST      | Edit product and upload   |
| `/products/chat`                       | GET       | Reading all chats in user |
| `/products/chat`                       | POST      | Chat between users        |
| `xxxxxxxxxxxxxx`                       | xxxx      | xxxxxxxxxxxxxxxxxxxxx     |
