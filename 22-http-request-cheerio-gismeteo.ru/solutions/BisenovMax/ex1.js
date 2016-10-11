
var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://yandex.ru/pogoda/moscow";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            temperature = $("div.current-weather__thermometer.current-weather__thermometer_type_now").html();
	 var num=temperature.indexOf("&");
	temperature=temperature.substring(0,num);
	console.log("Temperature in Moscow " + temperature);
    } else {
        console.log("Error: " + error);
    }
});