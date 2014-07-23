var express = require('express');
var router = express.Router();
var fs = require('fs');

var list = [];

fs.readdir("../web/pugs", function (err, files) {
    console.log("Files found: ")
    console.log(files);
    list = files;
});

/* GET home page. */
router.get('/random', function(req, res) {
    var idx = Math.floor(Math.random() * list.length);
    res.json({
        img: list[idx]
    });
});

module.exports = router;
