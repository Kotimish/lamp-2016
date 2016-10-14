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
    math = require('../../lib/math1.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('math', function() {

 it('asin(0)=0, function () {

      console.log(math11);
      expect(math1.math11(0)).to.be.equal(0);

    });
	it('asin(-PI/2)=-1, function () {

      console.log(math11);
      expect(math1.math11(-PI/2)).to.be.equal(-1);


    });
it('asin(PI/6)=0.5, function () {

      console.log(math11);
      expect(math1.math11(PI/6)).to.be.equal(0.5);

    });

it('asin(PI/2)=1, function () {

      console.log(math11);
      expect(math1.math11(PI/2)).to.be.equal(1);

    });


  });


});




