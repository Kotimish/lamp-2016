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


    });
it('sq(0)=0', function () {

      console.log(math);
      expect(math.square(0)).to.be.equal(0);

    });
it('sq(-5)=25', function () {

      console.log(math);
      expect(math.square(-8)).to.be.equal(64);

    });
it('sq(2)=4', function () {

      console.log(math);
      expect(math.square(4)).to.be.equal(16);

    });

});
});


