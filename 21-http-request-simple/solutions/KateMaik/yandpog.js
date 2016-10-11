'use strict';

var request = require('request');
request('https://yandex.ru/pogoda/moscow', function (error, response, body) {
  if (error  response.statusCode !== 200) {
    console.log('error %j; response.statusCode %s', error, response.statusCode);
  } else {
    console.log(body);
  }
});

