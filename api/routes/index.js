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
router.get('/random', function (req, res) {
    var idx = Math.floor(Math.random() * list.length);
    res.json({
        img: list[idx],
        id: idx,
        length: list.length
    });
});
router.get('/:id', function (req, res) {
    var id = 0;
    if (req.params.id) {
        id = req.params.id;
        if (req.params.id >= list.length) {
            id = list.length - 1;
        }
        if (req.params.id < 0) {
            id = 0;
        }
    }
    res.json({
        img: list[id],
        id: parseInt(id),
        length: list.length
    });
});

module.exports = router;
