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
  // self.number = false;

  self.setLine = function(line, pos) {
    self.line = line;
    self.pos = typeof pos !== 'undefined' ? pos : 0;
    };
  
  self.testNumber = function() {
    var ch = self.line[self.pos];
    var num = parseInt(ch);
    
    console.log('ch:', ch, ', num:', num);
    console.log('(typeof num === 	"number") :', (typeof num === 	"number"), ', (num !== NaN):', (num !== NaN));

    if ((typeof num === 	"number") && (!isNaN(num))) {
      //self.number = true;
      return true
   }; 
   return false;
  };

};



module.exports = LineScanner;

