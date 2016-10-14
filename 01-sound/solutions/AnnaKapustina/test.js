var
  fs = require('fs'),
	a=10;

  fd = fs.openSync('./test.raw', 'w'),
  b  = new Buffer(1000);

  i = 0;

while (i < b.length) {
  b[i] = a* Math.sin(
    2*Math.PI*450/8000;
  i++;
}

fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);
