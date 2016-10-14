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
    cos = require('../../lib/cos.js');
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
      expect(cos.cos).to.be.a('function');

    });


    it('is a function', function () {

      console.log(cos);
      expect(cos.cos(3)).to.be.equal(Math.cos(3));

    });

    it('is a function', function () {

      console.log(cos);
      expect(cos.cos(0)).to.be.equal(1);

    });

  });


});