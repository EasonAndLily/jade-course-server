import express from 'express';
import Router from './src/router.js';

const app = express();
const port = 3333;

new Router(app);

app.listen(port, () =>
  console.log(`Jade course server listening at http://localhost:${port}`)
);

export default app;
