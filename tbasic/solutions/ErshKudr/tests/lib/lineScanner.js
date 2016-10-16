/* globals describe, before, beforeEach, after, afterEach, it */

'use strict';

var chai = require('chai');
//var assert = chai.assert;
var expect = chai.expect;
//var should = chai.should();


// declaring global vars
var lineScanner;


describe('LineScanner', function() {

  before('before', function() {
    // initializing common test data
    var LineScanner = require('../../lib/lineScanner.js');
    lineScanner = new LineScanner();
  });

  beforeEach('beforeEach', function() {
  });

  afterEach('afterEach', function() {
  });

  after('after', function() {
  });


  describe('setLine', function() {

    it('is a function', function () {
      expect(lineScanner.setLine).to.be.a('function');
    });

    it('(line) sets line and sets pos=0', function () {
      var line = 'abcdef';
      lineScanner.setLine(line);
      expect(lineScanner.line).to.equal(line);
      expect(lineScanner.pos).to.equal(0);
    });

    it('(line, pos) sets both properties', function () {
      var line = 'abcdef';
      var pos = 3;
      lineScanner.setLine(line, pos)
      expect(lineScanner.line).to.equal(line);
      expect(lineScanner.pos).to.equal(pos);
    });

  });


});


