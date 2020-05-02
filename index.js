import express from 'express';
import Router from './src/router.js';
import yargs from 'yargs';

const app = express();
new Router(app);

const argv = yargs.argv;
const port = argv.port;
if (port) {
  app.listen(port, () =>
    console.log(`Jade course server listening at http://localhost:${port}`)
  );
}

export default app;
