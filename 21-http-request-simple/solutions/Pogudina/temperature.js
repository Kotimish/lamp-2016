var request = require("request"),
    cheerio = require("cheerio"),
    url = "https://yandex.ru/pogoda/moscow";
    result = '',
    i = 0;

	
request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body),
            temperature = $(".current-weather__thermometer").html(),
	    tempArray = temperature.split("")
	while (tempArray[i] !==	'&') {
	    result = result + tempArray[i];
	    i++;
}
        console.log("Temperature in Moscow " + result);
    } else {
        console.log("Error: " + error);
    }
});
