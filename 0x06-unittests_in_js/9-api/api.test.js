const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./api');

chai.use(chaiHttp);
const { expect } = chai;

describe('API Integration Tests', () => {
  describe('GET /', () => {
    it('should return welcome message', (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Welcome to the payment system');
          done();
        });
    });
  });

  describe('GET /cart/:id', () => {
    it('should return payment methods for a valid numeric id', (done) => {
      chai.request(app)
        .get('/cart/12')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('Payment methods for cart 12');
          done();
        });
    });

    it('should return 404 for a non-numeric id', (done) => {
      chai.request(app)
        .get('/cart/hello')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });

    it('should return 404 for an alphanumeric id', (done) => {
      chai.request(app)
        .get('/cart/123abc')
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
        });
    });
  });
});
