const request = require('supertest');
const app = require('../server');

describe('GET /status', () => {
  it('deve retornar status 200 e mensagem "API online"', async () => {
    const res = await request(app).get('/status');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('API online');
  });
});
