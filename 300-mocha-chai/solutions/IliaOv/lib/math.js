'use strict';


var square = function(x) {
  
  // This 'black box' function must return square of x.
  // Does it work properly ?

x = x*x;

  return x;
};


module.exports = {
  square: square
};

