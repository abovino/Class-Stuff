/*var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});*/

var should = require('chai').should();
disemvowel = require('../disemvowel.js');

describe('Disemvowel', function() {


  it('should remove all vowels from lowercase strings', function() {
    disemvowel('this is lowercase').should.equal('ths s lwcs');
  })


};