const chai = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let consoleSpy;
  let stub;

  beforeEach(() => {
    // Spy on console.log
    consoleSpy = sinon.spy(console, 'log');
    // Stub Utils.calculateNumber to always return 10
    stub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(() => {
    // Restore both stub and spy
    stub.restore();
    consoleSpy.restore();
  });

  it('should call Utils.calculateNumber with SUM, 100, 20 and log "The total is: 10"', function () {
    sendPaymentRequestToApi(100, 20);

    // Check stub called correctly
    sinon.assert.calledOnceWithExactly(stub, 'SUM', 100, 20);

    // Check console.log called with correct message
    sinon.assert.calledOnceWithExactly(consoleSpy, 'The total is: 10');
  });
});
