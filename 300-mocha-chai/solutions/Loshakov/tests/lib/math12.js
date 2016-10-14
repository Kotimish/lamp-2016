/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var math12;


describe('math12', function() {

  before('before', function() {
    // initializing common test data
    math12 = require('../../lib/math12.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('exp', function() {

    it('is a function', function () {

      console.log(math12);
      expect(math12.exp).to.be.a('function');

    });
    
    it('e^0=1', function () {

      console.log(math12);
      expect(math12.exp(0)).to.be.equal(1);

    });

    it('e^1=2.71', function () {

      console.log(math12);
      expect(math12.exp(1)).to.be.equal((Math.E));

    });

    it('e^2=7.3', function () {

      console.log(math12);
      expect(math12.exp(2)).to.be.equal((Math.E)*(Math.E));

    });

    it('-1', function () {

      console.log(math12);
      expect(math12.exp(-1)).to.be.equal(0);

    });

  });


});


