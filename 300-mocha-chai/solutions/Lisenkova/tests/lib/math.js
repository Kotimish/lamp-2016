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
	it('sq(11)=121', function () {

      		console.log(math);
      		expect(math.square(11)).to.be.equal(121);

    });
	
it('sq(-3)=9', function () {

      		console.log(math);
      		expect(math.square(-3)).to.be.equal(9);

    });
it('sq(0)=0', function () {

      		console.log(math);
      		expect(math.square(0)).to.be.equal(0);

   

    });
  });


});


