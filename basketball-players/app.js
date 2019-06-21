var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var playersRouter = require("./routes/players");
var testAPIRouter = require("./routes/testAPI");

var app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/players", playersRouter);
app.use("/testAPI", testAPIRouter);

//catch 404 and pass to error handler
app.use(function(req, res, next){
    next(createError(404));
});

//error handler
app.use(function(err, res, req, next){
    //set locals for errors in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    //render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
//

// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     res.status(200).json({
//         message: 'Successfully running'
//     });
// });

// module.exports = app;