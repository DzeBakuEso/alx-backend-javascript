// api.test.js
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');
const app = require('./api');

describe('API Tests', () => {
  it('GET / should return welcome message', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });

  describe('GET /cart/:id', () => {
    it('should return correct message when id is a number', (done) => {
      request(app)
        .get('/cart/12')
        .expect(200)
        .end((err, res) => {
          expect(res.text).to.equal('Payment methods for cart 12');
          done();
        });
    });

    it('should return 404 when id is not a number', (done) => {
      request(app)
        .get('/cart/abc')
        .expect(404, done);
    });
  });

  describe('GET /available_payments', () => {
    it('should return correct payment methods object', (done) => {
      request(app)
        .get('/available_payments')
        .expect(200)
        .end((err, res) => {
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
    it('should return welcome message with username', (done) => {
      request(app)
        .post('/login')
        .send({ userName: 'Frank' })
        .expect(200)
        .end((err, res) => {
          expect(res.text).to.equal('Welcome Frank');
          done();
        });
    });

    it('should return 400 if userName is missing', (done) => {
      request(app)
        .post('/login')
        .send({})
        .expect(400)
        .end((err, res) => {
          expect(res.text).to.equal('Missing userName');
          done();
        });
    });
  });
});
