const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let utils;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
    utils = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(() => {
    consoleSpy.restore();
    utils.restore();
  });

  it('sendPaymentRequestToApi with a=100, b=20', () => {
    sendPaymentRequestToApi(100, 20);

    expect(utils.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi with a=10 and b=10', () => {
    sendPaymentRequestToApi(10, 10);

    expect(utils.calledWith('SUM', 10, 10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
