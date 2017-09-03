import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

//file imports
require('./config/mongoose');
const log = require('./config/log')(module);
import routes from './config/routes';

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404);
  log.debug('Not found URL: %s',req.url);
  res.json({ error: 'Not found' });
  return;
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the log error
  res.status(err.status || 500);
  log.error('Internal error(%d): %s',res.statusCode,err.message);
  res.json({ error: err.message });
  return;
});

export default app;