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
var cheerio = require("cheerio");
var url = 'https://www.gismeteo.ru/city/daily/4368/';
var result = '',
i=0;



request(url, function (error, response, body) {
  
  if (!error) {

   var $ = cheerio.load(body),
	temperature = $("dd.value.m_temp.c").html(),
	tempArray = temperature.split("")
while (tempArray[i] !== '<') {
	result = result + tempArray[i];
	i++;
}


 console.log("Температура " + result + " градусов по Цельсию ");
    } else {
        console.log("Произошла ошибка: " + error);
    }
});
