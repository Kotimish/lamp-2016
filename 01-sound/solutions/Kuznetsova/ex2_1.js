var
  bf = 1000,
  fs = require('fs'),
  fd = fs.openSync('./test2.raw', 'w'),
  b  = new Buffer(bf),
j=0,
i, s, value;


var R = function (a, c, k) {
  var end = start + k;
  while (j < end) {
    value = 63 * Math.sin(
      2*Math.PI*j/(44100/a))+ 63*Math.sin(2*Math.PI*j/(44100/c));
    value = Math.ceil(value);
 
    b[j] = value;
    j++;  
  }
  start += k;
}; 


var  start = 0;
R (697,1209, bf/5);
R (697,1336, bf/5);
R (697, 1477, bf/5);
R (770,1209, bf/5);
R (770,1336, bf/5);


fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);