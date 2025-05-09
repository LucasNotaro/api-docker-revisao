const request = require('supertest');
const app = require('../server');

let server;

beforeAll(() => {
  server = app.listen(0);
});

afterAll(() => {
  server.close();
});

describe('GET /status', () => {
  it('deve retornar status 200 e mensagem "API online"', async () => {
    const res = await request(server).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('API online');
  });
});
