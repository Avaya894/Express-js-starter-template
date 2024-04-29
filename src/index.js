const express = require("express");
const morgan = require("morgan");
const createError = require('http-errors');

const apiRoutes = require("./routes");
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

// pass any unhandled errors to the error handler
app.use(errorHandler);

module.exports = app;

