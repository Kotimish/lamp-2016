/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var math4;


describe('math4', function() {

  before('before', function() {
    // initializing common test data
    math4 = require('../../lib/math4.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe.only('sin', function() {

    it('is a function', function () {

      console.log(math4);
      expect(math4.sin).to.be.a('function');
    });
    
    it ('sin 0 = 0', function (){
       expect(math4.sin(0)).to.be.equal(0);
    
    });

    
    it ('(Math.PI)/2 = 1', function (){
       expect(math4.sin(Math.PI/2)).to.be.equal(1);
    
    });

    

  });


});


