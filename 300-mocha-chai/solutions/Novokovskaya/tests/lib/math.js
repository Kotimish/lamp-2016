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
it('proverka 1', function () {

      console.log(math);
      expect(math.square(1)).to.equal(1);

    });
it('proverka 8', function () {

      console.log(math);
      expect(math.square(8)).to.equal(2);

    });
it('proverka -8', function () {

      console.log(math);
      expect(math.square(-8)).to.equal(0);

    });

it('proverka 0', function () {

      console.log(math);
      expect(math.square(0)).to.equal(0);

    });

});
});


