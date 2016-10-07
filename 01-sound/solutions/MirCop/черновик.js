var
  fs = require('fs');  
fd = fs.openSync('./test.raw', 'w');
 
 b  = new Buffer(1000); 
i = 0;


var AMP=10 ;
while (i < b.length) {

  b[i] = AMP * Math.sin(
  2*Math.PI*i*32/1000
  );
  

 i++;
}




fs.writeSync(fd, b, 0, b.length);


fs.closeSync(fd);
