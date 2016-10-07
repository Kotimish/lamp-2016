var i, j, s, value;
var AMP = 10;

for (i=0; i<10; i++) {
  value = AMP * Math.sin(
    2*Math.PI*8000/425
  );
  value = Math.ceil(value);

  s='';
  for (j = -10; j<value; j++) { s+= ' '; }
  s+='*';

  console.log(s);
}

