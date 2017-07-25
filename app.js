const express = require("express");
const bodyParser = require("body-parser");
const messages = require("./routes/messages");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
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
app.listen(port);

// module.exports = app;
