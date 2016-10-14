/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var math10;


describe('math10', function() {

  before('before', function() {
    // initializing common test data
    math10 = require('../../lib/math10.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe.only ('arctg', function() {

    it('is a function', function () {

      console.log(math10);
      expect(math10.arctg).to.be.a('function');
    });
    
    it ('arctg 1 = Pi/4', function (){
       expect(math10.arctg(1)).to.be.equal(Math.PI / 4);
    
    });

    it ('arctg (sqr3) = Pi/3', function (){
       expect(math10.arctg(Math.sqrt(3))).to.be.equal(Math.PI / 3);
    
    });
    

  });


});


