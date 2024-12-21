const chai = require('chai');

const { expect } = chai;
const request = require('request');

describe('testing index page', () => {
  it('returns the correct response', () => new Promise((done) => {
    request('http://localhost:7865 ', (error, response, body) => {
      expect(error).to.be.equal(null);
      expect(body).to.be.equal('Welcome to the payment system');
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  }));
});

describe('testing cart page', () => {
  it('returns the correct response for a number id', () => new Promise((done) => {
    const id = 23;
    request(`http://localhost:7865/cart/${id}`, (error, response, body) => {
      expect(error).to.be.equal(null);
      expect(body).to.be.equal(`Payment method for cart ${id}`);
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  }));

  it('returns 404 for id not a numnber', () => new Promise((done) => {
    const id = 'hello';
    request(`http://localhost:7865/cart/${id}`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  }));
});
