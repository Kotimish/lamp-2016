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
    
    it ('2^2 = 4', function (){
       expect(math.square(2)).to.be.equal(4);
    
    });

    
    it ('0,5*0,5 = 0,25', function (){
       expect(math.square(0,5)).to.be.equal(0,25);
    
    });

    
    it ('(-2)*(-2) = 4', function (){
       expect(math.square(-2)).to.be.equal(4);
    
    });

  });


});


