'use strict';


var cos = function(x) {
  
  // This 'black box' function must return square of x.
  // Does it work properly ?

  x = Math.cos(x);

  return x;
};


module.exports = {
  cos: cos


};

