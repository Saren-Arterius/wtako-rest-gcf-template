import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/', require('./routes/index'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send();
});

process.on('unhandledRejection', (e) => {
  console.error(e);
  process.exit(1);
});

module.exports = app;
