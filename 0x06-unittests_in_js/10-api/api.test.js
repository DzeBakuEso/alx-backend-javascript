const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('API Tests', () => {
  const baseURL = 'http://localhost:7865';

  it('GET / should return welcome message', (done) => {
    request.get(`${baseURL}/`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('GET /cart/:id', () => {
    it('should return correct message when id is a number', (done) => {
      request.get(`${baseURL}/cart/123`, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('should return 404 when id is not a number', (done) => {
      request.get(`${baseURL}/cart/abc`, (err, res, body) => {
        expect(res.statusCode).to.equal(404);
        done();
      });
    });
  });

  it('GET /available_payments should return correct object', (done) => {
    request.get(`${baseURL}/available_payments`, { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });

  describe('POST /login', () => {
    it('should return welcome message with username', (done) => {
      request.post(
        {
          url: `${baseURL}/login`,
          json: true,
          body: { userName: 'Dzeble' }
        },
        (err, res, body) => {
          expect(res.statusCode).to.equal(200);
          expect(body).to.equal('Welcome Dzeble');
          done();
        }
      );
    });

    it('should return 400 if userName is missing', (done) => {
      request.post(
        {
          url: `${baseURL}/login`,
          json: true,
          body: {}
        },
        (err, res, body) => {
          expect(res.statusCode).to.equal(400);
          done();
        }
      );
    });
  });
});
