var
  fs = require('fs'),
  fd = fs.openSync('./test.raw', 'w'),
  b  = new Buffer(1000),
AMP=10;
  i = 0;

while (i < b.length) {
value = AMP * Math.sin(
    2*Math.PI*i*425/8000
  );
  b[i] = value;
  i++;
}

fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);
