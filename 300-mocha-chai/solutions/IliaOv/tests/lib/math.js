/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var math;


describe('math', function() {

  before('before', function() {
    // initializing common test data
    math = require('../../lib/math.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('square', function() {

    it('is a function', function () {

      console.log(math);
      expect(math.square).to.be.a('function');

    });


it('sq(1000)=1000000', function () {

      console.log(math);
      expect(math.square(10)).to.be.equal(100);

    });
it('sq(0)=0', function () {

      console.log(math);
      expect(math.square(0)).to.be.equal(0);

    });
it('sq(-8)=64', function () {

      console.log(math);
      expect(math.square(-9)).to.be.equal(81);

    });
it('sq(1)=1', function () {

      console.log(math);
      expect(math.square(4)).to.be.equal(16);

    });

});
});


