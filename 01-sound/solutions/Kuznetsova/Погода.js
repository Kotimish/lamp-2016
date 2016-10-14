
'use strict';

var request = require('request');
var temp = '';
var i = 0 ;
var index = 0;
var st = "current-weather__thermometer current-weather__thermometer_type_now";

request('https://yandex.ru/pogoda/moscow', function (error, response, body) {
  if (error || response.statusCode !== 200) {
    console.log('error: %j; response.statusCode: %s', error, response.statusCode);
  } else {
     
     index = body.indexOf (st);
     index = index+ st.length;
     temp = body.substring (index, index+ 5);
 	//console.log('index:', index);
   
     console.log("Температура" + temp);
  }
});



