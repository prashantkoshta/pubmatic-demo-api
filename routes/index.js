var express = require('express');
var moment = require('moment-timezone');
var router = express.Router();

router.get('/', function(req, res, next) {
  let key = getRandomValue(0,50000);
  let price = getRandomValue(20,400);
  var obj = {
        "id":key,
        "name":"Client_"+key,
        "price":price,
        "datetimes":{
            "updated":getTime(),
            "lastexecuted":getTime()
        },
        "tags":[
            "this",
            "that",
            "other"
        ]
  };

  res.send(obj);

});

function getTime(){
  return moment().tz("America/Los_Angeles").format();
}

function getRandomValue(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = router;
