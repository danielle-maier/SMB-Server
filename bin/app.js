const express = require("express");
const bodyParser = require("body-parser");
const breweries = require("./routes/messages");
const app = express();

app.use(bodyParser.json());
app.use("/messages", messages);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: app.get("env") === "development" ? err : {}
    });
});


module.exports = app;
