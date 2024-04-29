const request = require('supertest');
const app = require('../src/index');

// let server;

// beforeAll(async () => {
//   server = await app.listen(ServerConfig.PORT);
// });

// afterAll(async () => {
//   await server.close();
// });

describe('index', () => {
  it('should export the express index correctly', () => {
    expect(app).toBeTruthy();
  });

  describe('GET /api/v1/info', () => {
    it('should respond to the GET method with 200', async () => {
      const response = await request(app).get('/api/v1/info');
      expect(response.statusCode).toBe(200);
    });
  });

  describe('GET /404', () => {
    beforeEach(() => {
      // Avoid polluting the test output with 404 error messages
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    it('should respond to the GET method with a 404 for a route that does not exist', async () => {
      const response = await request(app).get('/404');
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe('{"message":"Not Found"}');
    });

    it('should respond to the POST method with a 404 for a route that does not exist', async () => {
      const response = await request(app).post('/404');
      expect(response.statusCode).toBe(404);
      expect(response.text).toBe('{"message":"Not Found"}');
    });
  });
});
