var i, j, s, value;

for (i=0; i<10; i++) {
  value = 10 * Math.sin(
    2*Math.PI*i/25
  );
  value = Math.ceil(value);

  s='';
  for (j = -10; j<value; j++) { s+= ' '; }
  s+='*';

  console.log(s);
}

