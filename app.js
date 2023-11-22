var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var https = require('https');
var fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var rolesRouter = require('./routes/roles');
var permsRouter = require('./routes/permissions');
var authRouter = require('./routes/auth');
var layersRouter = require('./routes/layers');

var passport = require('passport');
require('./config/passport')(passport);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/permissions', permsRouter);

// Apply the authentication middleware for protected routes
app.use('/api/v1/layers', layersRouter);

// Serve static files from the 'public' directory over HTTPS
app.use(express.static(path.join(__dirname, 'public')));

// Load SSL certificates if they exist
let credentials = null;
const privateKeyPath = './certificates/example.com+5-key.pem';
const certificatePath = './certificates/example.com+5.pem';

if (fs.existsSync(privateKeyPath) && fs.existsSync(certificatePath)) {
  const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
  const certificate = fs.readFileSync(certificatePath, 'utf8');
  credentials = { key: privateKey, cert: certificate };
}

// Create an HTTP or HTTPS server based on the presence of certificates
const server = credentials ? https.createServer(credentials, app) : app;

// Start the server on port 3000 or 3001
const PORT = credentials ? 3001 : 3001;
server.listen(PORT, () => {
  console.log(`Server running on ${credentials ? 'https' : 'http'}://localhost:${PORT}`);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
