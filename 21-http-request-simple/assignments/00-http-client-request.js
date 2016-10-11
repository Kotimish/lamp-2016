/**
 *
 * Задание см. README.md в этом же каталоге
 *
 */

'use strict';

var request = require('request');

request('http://www.yandex.ru', function (error, response, body) {
  if (error || response.statusCode !== 200) {
    console.log('error: %j; response.statusCode: %s', error, response.statusCode);
  } else {
    console.log(body);
  }
});
