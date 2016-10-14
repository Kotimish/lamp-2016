'use strict';


/**
 * LineScanner реализует базовые функции работы со строкой
 *
 * @constructor
 */


function LineScanner() {
  var self = this;

  self.line = '';
  self.pos = 0;


  self.setLine = function(line, pos) {
    self.line = line;
    self.pos = typeof pos !== 'undefined' ? pos : 0;
  };


}


module.exports = LineScanner;
