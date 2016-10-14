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


  it('is a function', function () {

      console.log(math);
      expect(math.square(7)).to.be.equal(49);

    });

  });


});


/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var cos;


describe('cos', function() {

  before('before', function() {
    // initializing common test data
    cos = require('../../lib/math.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('cos', function() {

    it('is a function', function () {

      console.log(cos);
      expect(math.cos).to.be.a('function');

    });


    it('is a function', function () {

      console.log(cos);
      expect(math.cos(1)).to.be.equal(0.5403023058681398);

    });

    it('is a function', function () {

      console.log(cos);
      expect(math.cos(0)).to.be.equal(1);

    });

  });


});