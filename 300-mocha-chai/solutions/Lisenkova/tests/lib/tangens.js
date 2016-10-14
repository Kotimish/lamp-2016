/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var tangens;


describe('tangens', function() {

  before('before', function() {
    // initializing common test data
    tangens = require('../../lib/tangens.js');
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('tangens', function() {

    it('is a function', function () {

      console.log(tangens);
      expect(tangens.tang).to.be.a('function');

    });
	it('tang(1/2)=0.5463024898437905', function () {

      		console.log(tangens);
      		expect(tangens.tang(1/2)).to.be.equal(0.5463024898437905);

    });
	it('tang(0)=0', function () {

      		console.log(tangens);
      		expect(tangens.tang(0)).to.be.equal(0);

    });

  });
});