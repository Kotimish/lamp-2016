/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();



// declaring global vars
var mymath;


describe('tangens', function() {

  before('before', function() {
    // initializing common test data
    mymath = require('../../lib/mymath.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('mymath', function() {

   
  it('tan(PI/4)=1.00', function () {

      var angle = (Math.PI)/4;
      var tan = Math.tan(angle);
      tan = Math.round(tan);

      expect(tan).to.be.equal( 1);

    });


  });


});




