'use strict';


var exp = function(x) {
  if ((x>0) ||(x==0)) {
    x = Math.exp(x);
  } else {
    x = 0;
  };
  return x;
};


module.exports = {
  exp: exp
};

