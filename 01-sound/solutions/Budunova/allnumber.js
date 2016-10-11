var 
 fs = require('fs'),
 a =63,
 bf=40000,
 fd=fs.openSync('./allnumbers.raw','w'),
 b = new Buffer(bf),
 i=0;

var Numbers= function (num1,num2,k){
while(i < start+k) 
  { 
  b[i] = a*Math.sin(2*Math.PI*i*(num1)/44100)
       + a*Math.sin(2*Math.PI*i*(num2)/44100);
  i++;
  }

  start+=k;
};

var start=0;
Numbers(697,1209,bf/5);
Numbers(697,1336,bf/5);
Numbers(607,1447,bf/5);
Numbers(770,1209,bf/5);
Numbers(770,1336,bf/5);


fs.writeSync(fd,b,0,b.length);
fs.closeSync(fd);
