var express = require("express");

module.exports = function () {
    var middleware = [
        // list of middleware that you want to have performed:
        function mymiddleware(req, res, next) {
            console.log("hello world");
            next();
        },
        express.logger("dev"),
        express.cookieParser(),
        express.static(__dirname),
    ];
    return function (req, res, next) {
        (function iter(i, max) {
            if (i === max) {
                return next();
            }
            middleware[i](req, res, iter.bind(this, i + 1, max));
        })(0, middleware.length);
    };
};
