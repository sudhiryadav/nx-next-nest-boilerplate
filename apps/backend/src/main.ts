import { bootstrap } from '@vendure/core';
import { config } from './vendure-config';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

bootstrap(config)
  .then(app => {
    console.log(`
      Vendure server is running!
      Shop API: http://localhost:${config.apiOptions.port}/${config.apiOptions.shopApiPath}
      Admin API: http://localhost:${config.apiOptions.port}/${config.apiOptions.adminApiPath}
      Admin UI: http://localhost:${config.apiOptions.port}/admin
    `);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });