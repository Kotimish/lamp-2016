/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var cotang;


describe('cotang', function() {

  before('before', function() {
    // initializing common test data
    cotang = require('../../lib/cotang.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('cotang', function() {

    it('is a function', function () {

      console.log(cotang);
      expect(cotang.cotan).to.be.a('function');

    });


it('cotan(1)=0.01745506492821758576512889521973', function () {

      console.log(cotang);
      expect(cotang.cotan(1)).to.be.equal(0.01745506492821758576512889521973);

    });

});
});