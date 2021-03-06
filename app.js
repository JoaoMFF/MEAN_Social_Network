const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const bluebird = require("bluebird");

const indexRouter = require("./api/routes/index");

const app = express();
// mongoose setup
mongoose.Promise = bluebird;
mongoose
    .connect("mongodb://127.0.0.1:27017/mean")
    .then(() => {
        console.log(
            `Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/mean`
        );
    })
    .catch(() => {
        console.log(
            `Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/mean`
        );
    });

// CORS setup
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;
