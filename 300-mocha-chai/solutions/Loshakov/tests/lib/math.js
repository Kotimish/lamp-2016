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

    it('0^2=0', function () {

      console.log(math);
      expect(math.square(0)).to.be.equal(0);

    });
    it('(-9)^2=81', function () {

      console.log(math);
      expect(math.square(-9)).to.be.equal(81);

    });
    it('100^2=10000', function () {

      console.log(math);
      expect(math.square(100)).to.be.equal(10000);

    });

  });


});


