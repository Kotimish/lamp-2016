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
  
  self.getChar = function(ch) {
	  var line = self.line[self.pos];
	  var pos=self.pos; 
	for(var i=0;i<=ch.length;i++){
    if (line===ch[i]){
		pos+=1;
		console.log(pos);
		return line;
		};
	};	 
   return null;
  };

};



module.exports = LineScanner;