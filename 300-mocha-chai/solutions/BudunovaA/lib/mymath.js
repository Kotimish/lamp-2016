'use strict';


var tang = function(x) {
  
  // This 'black box' function must return square of x.
  // Does it work properly ?

 // x = eval(function(p,a,c,k,e,d){e=/*function(c){return c}*\;if(!''.replace(/^/,String)){while(c--){d[c]=k[c]||c}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('2=2>=0?2*2:-1;',3,3,'||x'.split('|'),0,{}));
x=Math.tan(x);


  return x;
};


module.exports = {
  tang: tang
};

