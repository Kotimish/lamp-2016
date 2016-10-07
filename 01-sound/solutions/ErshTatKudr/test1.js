var fs=require('fs')
var a = 1, k;

fd=fs.openSync('./test2.raw', 'w'),

b=new Buffer(1000);

k=425;
i=0;

while(i<b.length)
{ 
	b[i] = a*Math.sin( 2*Math.PI*i*k/8000);
	i++;
}

fs.writeSync(fd, b, 0, b.length);
fs.closeSync(fd);