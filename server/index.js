const express = require('express');
const app = express();
const PORT = 8000;
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const apiRouter = require('./api');
const db = require('./db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', apiRouter);
app.use(express.static(path.join(__dirname, '../public')));

app.use('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error!');
});

// app.use(express.static(path.join(__dirname, 'client/build')));

db.sync()
.then(() => {
  console.log('db is synced!');
  app.listen(process.env.PORT || PORT, () => {
    console.log(`listening on PORT ${PORT}`);
  });
})
.catch(console.error);

module.exports = app;