'use strict';

var request = require('request');
var cheerio = require("cheerio"); 
var url = 'https://yandex.ru/pogoda/moscow';

request(url, function (error, response, body) {
  if (error) {
    console.log("Error: " + error);
  } else {
    var $ = cheerio.load(body),
	result = '',
	i = 0,
        tm = $("div.current-weather__thermometer.current-weather__thermometer_type_now").html(),
        tmArr= tm.split("");
    while (tmArr[i] !== '&') {
	result = result + tmArr[i];
	i++;
    }
    console.log("Температура в Москве " + result);

  }
});
