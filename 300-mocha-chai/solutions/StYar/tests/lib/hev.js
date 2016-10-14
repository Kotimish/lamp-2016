/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var hev;


describe('hev', function() {

  before('before', function() {
    // initializing common test data
    hev = require('../../lib/hev.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('hev', function() {

    it('is a function', function () {

      console.log(hev);
      expect(hev.hev).to.be.a('function');

    });


    it('is a function', function () {

      console.log(hev);
      expect(hev.hev(8)).to.be.equal(8);

    });

    it('is a function', function () {

      console.log(hev);
      expect(hev.hev(-8)).to.be.equal(0);

    });

  });


});