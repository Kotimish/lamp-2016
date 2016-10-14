var i, j, s, value;
var
  fs = require('fs'),
  fd = fs.openSync('./test23.raw', 'w'),
  b  = new Buffer(1000),
  j = 0;


while (i < b.length) {


  value = 10 * Math.sin(
    2*Math.PI*i/20
  );
  value = Math.ceil(value);

  b[i] = i;
  i++;
}





fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);
