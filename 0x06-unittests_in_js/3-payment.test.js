const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi should be equal to Utils.calculateNumber', () => {
    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    const sumRes = parseInt(consoleSpy.args[0][0].slice(14));

    expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(sumRes);
    consoleSpy.restore();
  });
});
