const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('API integration tests', () => {
  describe('GET /available_payments', () => {
    it('should return available payment methods as an object', (done) => {
      request(app)
        .get('/available_payments')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body).to.deep.equal({
            payment_methods: {
              credit_cards: true,
              paypal: false
            }
          });
          done();
        });
    });
  });

  describe('POST /login', () => {
    it('should return welcome message with userName', (done) => {
      request(app)
        .post('/login')
        .send({ userName: 'Betty' })
        .set('Content-Type', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          expect(res.text).to.equal('Welcome Betty');
          done();
        });
    });

    it('should return 400 if userName is missing', (done) => {
      request(app)
        .post('/login')
        .send({})
        .set('Content-Type', 'application/json')
        .expect(400, done);
    });
  });
});
