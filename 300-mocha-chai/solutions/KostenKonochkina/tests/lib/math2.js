/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var math2;


describe('math2', function() {

  before('before', function() {
    // initializing common test data
    math2 = require('../../lib/math2.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe.only ('exp', function() {

       
	it('exp(0) = 1', function () {

      console.log(math2);
      expect(math2.exp(0)).to.equal(1);

    });
    
     	it('exp(1) = exp(1)', function () {

      console.log(math2);
      expect(math2.exp(1)).to.equal(Math.exp(1));

    });



  });


});


