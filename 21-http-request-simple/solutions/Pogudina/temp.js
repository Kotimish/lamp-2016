/**
 *
 * Задание см. README.md в этом же каталоге
 *
 */

'use strict';

var request = require('request'),
    cheerio = require('cheerio'),
url= 'https://yandex.ru/pogoda/moscow';


request(url, function (error, response, body) {
  if (!error) {
           var $ = cheerio.load(body),
           temperature = $(".current-weather__thermometer").html();
 var num=temperature.indexof("&");
temperature=temperature.substring(0.num);
console.log("Temperature in Moscow " + temperature);


  } else {
    console.log("Ошибка: " + error);
  }
});
