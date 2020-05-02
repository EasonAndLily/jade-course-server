import express from 'express';
import Router from './src/router.js';
import yargs from 'yargs';
import mongoose from 'mongoose';

const app = express();
new Router(app);

mongoose.connect('mongodb://localhost:27017/jade', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on(
  'error',
  console.error.bind(console, 'connection error:')
);
mongoose.connection.once('open', function () {
  console.log('Connect mongodb successfully!');
});

const argv = yargs.argv;
const port = argv.port;
if (port) {
  app.listen(port, () =>
    console.log(`Jade course server listening at http://localhost:${port}`)
  );
}

export default app;
