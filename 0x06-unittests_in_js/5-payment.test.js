const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log "The total is: 120" and call console once for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 120');
  });

  it('should log "The total is: 20" and call console once for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnce(consoleSpy);
    sinon.assert.calledWithExactly(consoleSpy, 'The total is: 20');
  });
});
