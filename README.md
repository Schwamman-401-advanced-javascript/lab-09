# lab-08

## Express Routing & Connected API

### Author: Jonathon Schwamman

### Links and Resources
* [submission PR](https://github.com/Schwamman-401-advanced-javascript/lab-08/pull/1)
* [travis](https://www.travis-ci.com/Schwamman-401-advanced-javascript/lab-08)

#### Documentation


### Modules
#### `categories.js`
##### Exported Values and Methods


#### `products.js`
##### Exported Values and Methods

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `node .`
* Endpoint: `/categories`
  * GET: Returns a JSON object with all categories.
  * POST: Creates a new category in db.
  * PUT: Updates an existing category from the db.
  * DELETE: Deletes an existing category from the db.
* Endpoint: `/categories/:id`
  * Returns a JSON object with the category matching the id param.
* Endpoint: `/products`
  * GET: Returns a JSON object with all products.
  * POST: Creates a new product in db.
  * PUT: Updates an existing product from the db.
  * DELETE: Deletes an existing product from the db.
* Endpoint: `/products/:id`
  * Returns a JSON object with the product matching the id param.
  
#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?


