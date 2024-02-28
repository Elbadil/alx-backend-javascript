const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { spy } = require('sinon');
const { expect } = require('chai');

describe('calculateNumber Usage', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calculateNumberSpy = spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
    calculateNumberSpy.restore();
  });
});
