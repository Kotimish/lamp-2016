var i, j, s, value;

var
  fs = require('fs'),
  fd = fs.openSync('./test.raw', 'w'),
  b  = new Buffer(1000),
  i = 0;

for (i=0; i<10; i++) {
  value = 10 * Math.sin(
    2*Math.PI*i/20
  );
  value = Math.ceil(value);

  s='';
  for (j = -10; j<value; j++) { s+= ' '; }
  s+='*';

  console.log(s);
}

fs.writeSync(fd, b, 0, b.length);

fs.closeSync(fd);
