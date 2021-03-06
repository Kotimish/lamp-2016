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
	it('3*3=9', function () {

      console.log(math);
      expect(math.square(3)).to.equal(9);

    });
it('27*27=729', function () {

      console.log(math);
      expect(math.square(27)).to.equal(729);

    });

it('-27*(-27)=729', function () {

      console.log(math);
      expect(math.square(-27)).to.equal(729);

    });


  });


});


