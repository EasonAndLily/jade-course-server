import express from 'express';
import Router from './src/router.js';
import yargs from 'yargs';
import mongoose from 'mongoose';
import cors from 'cors';

const argv = yargs.argv;
const ENV = process.env.ENV;
const app = express();
app.use(cors());
app.use(express.json());
new Router(app);

if (ENV === 'pro' || ENV === 'dev') {
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
}

const port = argv.port;
if (ENV !== 'test' && port) {
  app.listen(port, () =>
    console.log(`Jade course server listening at http://localhost:${port}`)
  );
}

export default app;
