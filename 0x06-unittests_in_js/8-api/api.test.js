const chai = require('chai')
const expect = chai.expect
const request = require('request');

describe('Testing index page', () =>{
  it('returns the correct response', (done) => {
    request('http://localhost:7865 ', (error, response, body) => {
      expect(error).to.be.equal(null);
      expect(body).to.be.equal('Welcome to the payment system');
      expect(response.statusCode).to.be.equal(200)
      done();
    })
  })
}
)