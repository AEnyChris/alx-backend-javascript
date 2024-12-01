const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi should be equal to Utils.calculateNumber', () => {
    const consoleSpy = sinon.spy(console, 'log');
    const utils = sinon.stub(Utils, 'calculateNumber').returns(10);

    sendPaymentRequestToApi(100, 20);

    expect(utils.calledWith('SUM', 100, 20)).to.be.true;
    // expect(calN.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    consoleSpy.restore();
    utils.restore();
    // calN.restore();
  });
});
