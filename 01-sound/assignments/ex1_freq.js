var i, j, s, value;
<<<<<<< HEAD

var AMP = 10; 
for (i=0; i<8000; i++) {
=======
var AMP = 10;
for (i=0; i<10; i++) {
>>>>>>> 21e99d4a4b1a047fc2a35c3810552e1eaf42f1f8
  value = AMP * Math.sin(
    2*Math.PI*i/10
  );
  value = Math.ceil(value);

  s='';
  for (j = -425; j<value; j++) { s+= ' '; }
  s+='*';

  console.log(s);
}

