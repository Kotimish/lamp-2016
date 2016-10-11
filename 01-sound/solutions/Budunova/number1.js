var fs = require('fs');
var a =10;
fd=fs.openSync('./number1.raw','w'),
b = new Buffer(1000);

i=0;
while(i<b.length)
{ b[i]=a*Math.sin(2*Math.PI*i*1209/8000)+a*Math.sin(2*Math.PI*i*697/8000);
i++;
}
fs.writeSync(fd,b,0,b.length);
fs.closeSync(fd);