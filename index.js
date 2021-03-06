/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed dyb
 */

'use strict';

module.exports = require('./lib/express');
var express = require('express')
  var app = express()
    app.get('/', function (req, res) {
    res.send('Hello World!')
  })

    app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
