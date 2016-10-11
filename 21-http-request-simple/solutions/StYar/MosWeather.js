var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://yandex.ru/pogoda/moscow";

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            temp = $("div.current-weather__thermometer.current-weather__thermometer_type_now").html();
        for (i=0;i<3;i++) {    
	if (temp[i]=="&") {break;}}
	console.log("Temperature in Moscow " + temp.substr(0,i));
    } else {
        console.log("Error: " + error);
    }
});