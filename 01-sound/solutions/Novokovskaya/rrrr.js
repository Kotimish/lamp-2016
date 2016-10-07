var AMP = 10;
  fs = require('fs'),
  fd = fs.openSync('.test_rrrr.raw', 'w'),
  b  = new Buffer(1000),
  i = 0;

while(i < b.length) {
b[i] = AMP * Math.sin(
    2*Math.PI*i*32/8000
);

i++
}

fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);