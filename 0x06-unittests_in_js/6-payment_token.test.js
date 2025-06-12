// 6-payment_token.test.js

const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  it('should resolve with correct data when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.be.an('object');
        expect(res).to.have.property('data', 'Successful response from the API');
        done();
      })
      .catch(done);
  });
});
