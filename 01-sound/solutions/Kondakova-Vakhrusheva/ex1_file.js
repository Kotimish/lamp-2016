var
  fs = require('fs'),
  fd = fs.openSync('./test.raw', 'w'),
  b  = new Buffer(1000),
  i = 0;
  AMP = 10;
while (i < b.length) {
  
  value = AMP * Math.sin(2*Math.PI*i/10);
  b[i] = Math.ceil(value);
  i++;
}

fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);
