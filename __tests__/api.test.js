const {server} = require('../src/app');
const supergoose = require('./supergoose');
const mockRequest = supergoose(server);

describe('Products/Categories API', () => {
  let newProduct = {name: 'Product1', price: 10, quantity: 0, inStock: false};

  it('responds wiht 404 if not found', () => {
    return mockRequest
      .get('/404')
      .expect(404);
  });

  describe('Products API', () => {
    it('can get all products', () => {
      return mockRequest
        .get('/api/v1/products')
        .expect(200)
        .expect({'results':{'count':0,'results':[]}});
    });

    //Ask question - how best to return status 404 if id not found
    it.skip('returns 404 if id not found', () => {
      return mockRequest
        .get('/api/v1/products/5d8bdfa1f7e6135238aa3412')
        .expect(404);
    });

    it('can post new product', () => {
      return mockRequest
        .post('/api/v1/products')
        .send(newProduct)
        .then(res => { 
          return mockRequest
            .get(`/api/v1/products/${res.body._id}`)
            .expect(200)
            .then(res => {
              expect(res.body).toHaveProperty('name', 'Product1');
            });
        });
    });

    it('can update existing product', () => {
      return mockRequest
        .post('/api/v1/products')
        .send(newProduct)
        .then(res => { 
          return mockRequest
            .put(`/api/v1/products/${res.body._id}`)
            .send({name: 'Product1', price: 10, quantity: 5, inStock: true})
            .then(result => {
              return mockRequest
                .get(`/api/v1/products/${res.body._id}`)
                .expect(200)
                .then(res => {
                  expect(res.body).toHaveProperty('name', 'Product1');
                  expect(res.body).toHaveProperty('quantity', 5);
                  expect(res.body).toHaveProperty('inStock', true);
                });
            });
        });
    });  
    
    it('can delete existing product', () => {
      return mockRequest
        .post('/api/v1/products')
        .send(newProduct)
        .then(res => { 
          return mockRequest
            .delete(`/api/v1/products/${res.body._id}`)
            .expect(200)
            .then(result => {
              return mockRequest
                .get(`/api/v1/products/${res.body._id}`)
                .then(res => {
                  expect('null');
                });
            });
        });
    });
  });

  let newCategory = {name: 'Category1'};

  describe('Categories API', () => {
    it('can get all categories', () => {
      return mockRequest
        .get('/api/v1/categories')
        .expect(200)
        .expect({'results':{'count':0,'results':[]}});
    });

    //Ask question - how best to return status 404 if id not found
    it.skip('returns 404 if id not found', () => {
      return mockRequest
        .get('/api/v1/categories/5d8bdfa1f7e6135238aa3412')
        .expect(404);
    });

    it('can post new category', () => {
      return mockRequest
        .post('/api/v1/categories')
        .send(newCategory)
        .then(res => { 
          return mockRequest
            .get(`/api/v1/categories/${res.body._id}`)
            .expect(200)
            .then(res => {
              expect(res.body).toHaveProperty('name', 'Category1');
            });
        });
    });

    it('can update existing category', () => {
      return mockRequest
        .post('/api/v1/categories')
        .send(newCategory)
        .then(res => { 
          return mockRequest
            .put(`/api/v1/categories/${res.body._id}`)
            .send({name: 'Category1', price: 10, quantity: 5, inStock: true})
            .then(result => {
              return mockRequest
                .get(`/api/v1/categories/${res.body._id}`)
                .expect(200)
                .then(res => {
                  expect(res.body).toHaveProperty('name', 'Category1');
                });
            });
        });
    });  
    
    it('can delete existing category', () => {
      return mockRequest
        .post('/api/v1/categories')
        .send(newCategory)
        .then(res => { 
          return mockRequest
            .delete(`/api/v1/categories/${res.body._id}`)
            .expect(200)
            .then(result => {
              return mockRequest
                .get(`/api/v1/categories/${res.body._id}`)
                .then(res => {
                  expect('null');
                });
            });
        });
    });
  });
});