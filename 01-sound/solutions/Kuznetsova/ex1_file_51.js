var
  fs = require('fs'),
  fd = fs.openSync('./testtr.raw', 'w'),
  b  = new Buffer(1000),
j=0,
i, s, value;


while (j < b.length) {
 value = 10 * Math.sin(
    (2*Math.PI*j/(8000/425))
  );
  value = Math.ceil(value);
 
  b[j] = value;
  j++;
}


fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);