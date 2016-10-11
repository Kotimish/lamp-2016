
'use strict';

var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://www.gismeteo.ru/city/daily/4368/";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            temperature = $("dd.value.m_temp.c").html();
	
	console.log("Temp is:" + temperature);
 
    } else {
        console.log("Произошла ошибка: " + error);
    }
});