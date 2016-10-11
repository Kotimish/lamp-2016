/**
 * Задание
 * =======
 *
 * С использованием примера ниже, получить HTML страницу с прогнозом погоды по городу Москва
 *
 *
 */

'use strict';

var request = require('request');
var x=document.getElementsByClassName('value m_temp c');

request('https://www.gismeteo.ru/city/daily/4368/', function (error, response, body) {
  if (error || response.statusCode !== 200) {
    console.log('error: %j; response.statusCode: %s', error, response.statusCode);
  } else {
if (
    console.log(x[0].innerHTML));
  }
});
