const request = require('supertest');
const app = require('../src/index');

describe('Products API', () => {
    it('should create a new product', async () => {
        const response = await request(app).post('/products').send({
            name: 'Product 1',
            price: 100
        });
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Product 1');
    });

    it('should get all products', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should get a product by ID', async () => {
        const response = await request(app).get('/products/1');
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(1);
    });

    it('should update a product by ID', async () => {
        const response = await request(app).put('/products/1').send({
            name: 'Updated Product 1',
            price: 150
        });
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Updated Product 1');
    });

    it('should delete a product by ID', async () => {
        const response = await request(app).delete('/products/1');
        expect(response.status).toBe(204);
    });

    it('should return 404 for non-existing product', async () => {
        const response = await request(app).get('/products/999');
        expect(response.status).toBe(404);
    });
});
