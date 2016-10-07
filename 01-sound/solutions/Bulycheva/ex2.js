var
  fs = require('fs'),
  fd = fs.openSync('./test1.raw', 'w'),
  b  = new Buffer(1000),
  i = 0,
  value=0,
AMP=10;

while (i < b.length) {
value = AMP * Math.sin(
    2*Math.PI*425*i/8000
  );
value = Math.ceil(value);
  b[i] = value;
  i++;
}

fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);
