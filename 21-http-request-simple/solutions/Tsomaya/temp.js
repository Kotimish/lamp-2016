'use strict';

var request = require('request'),
 cheerio = require('cheerio'),
 t=0;

request('https://www.gismeteo.ru/city/daily/4368/', function (error, response, body) {
  if (error || response.statusCode !== 200) {
    console.log('error: %j; response.statusCode: %s', error, response.statusCode);
  } else {
    var $=cheerio.load('body');
        t= $('<dd class="value m_temp c">+5</dd>').html();
    console.log("Temperature in Moskow " + t);
  }
});