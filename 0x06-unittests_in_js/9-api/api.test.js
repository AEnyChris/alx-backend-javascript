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

describe('Testing cart page', () =>{
  it('returns the correct response for a number id', (done) => {
    const id = 23
    request(`http://localhost:7865/cart/${id}`, (error, response, body) => {
      expect(error).to.be.equal(null);
      expect(body).to.be.equal(`Payment method for cart ${id}`);
      expect(response.statusCode).to.be.equal(200)
      done();
    })
  })

  it('returns 404 for id not a numnber', (done) => {
    const id = 'hello'
    request(`http://localhost:7865/cart/${id}`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(404)
      done();
    })
  })
}
)