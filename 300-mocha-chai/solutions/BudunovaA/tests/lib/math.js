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

    it('2*2=4', function () {

      console.log(math);
      expect(math.square(2)).to.equal(4);

    });
	it('4*4=16', function () {

      console.log(math);
      expect(math.square(4)).to.equal(16);

    });
	it('(-2)*(-2)=4', function () {

      console.log(math);
      expect(math.square(-2)).to.equal(4);

   
    });

  });


});


