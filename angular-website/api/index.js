const { createRequestHandler } = require('@vercel/node');
const { join } = require('path');

module.exports = createRequestHandler({
  build: {
    directory: join(process.cwd(), 'dist/angular-website/browser')
  },
  mode: 'production'
});
