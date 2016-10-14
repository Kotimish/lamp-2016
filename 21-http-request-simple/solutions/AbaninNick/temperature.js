'use strict';

var request = require('request');
var cheerio = require('cheerio');

request('https://yandex.ru/pogoda/moscow', function (error, response, body) {
  if (error || response.statusCode !== 200) {
    console.log('error: %j; response.statusCode: %s', error, response.statusCode);
  } else {
	var i = 0;
	var result = '';
	var $ = cheerio.load(body);
	var temp = $(".current-weather__thermometer").html();
	var tempAr = temp.split("");
	while(tempAr[i] != '&'){
	result+=tempAr[i];
	i++;
  }
	console.log(result);	
  }
});
