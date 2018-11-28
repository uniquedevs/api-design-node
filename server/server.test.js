var app = require('./server');
var request = require('supertest');

describe('server', () => {
  it('lions api', (done) => {
    request(app)
      .get('/api/lions')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, resp) {
        expect(Array.isArray(resp.body)).toBe(true);
        done();
      })
  });
});
