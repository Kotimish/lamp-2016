'use strict';


var math1 = function(x) {
  
  // This 'black box' function must return square of x.
  // Does it work properly ?

  x = Math.asin(x)

  return x;
};


module.exports = {
  math1: math1
};

