require('dotenv').config();
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const next = require('next');
const morgan = require('morgan');

// Next.js application configuration.
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express(); // Express.js application.

  app.use(cors()); // Enable CORS.
  app.use(bodyParser.urlencoded({ extended: false })); /* Parse the URL-encoded data with the
                                                          querystring library. */
  app.use(bodyParser.json()); // Parse incoming request bodies to JSON under `req.body`.
  app.use(compression()); // Compress response bodies.
  app.use(morgan(dev ? 'dev' : 'combined')); // HTTP request logger.

  // Next.js server-side rendering GET route.
  app.get('*', (req, res) => handle(req, res));

  app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
