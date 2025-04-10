import { VendureConfig } from '@vendure/core';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import path from 'path';

export const config: VendureConfig = {
  apiOptions: {
    port: 3001,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    cors: true,
  },
  authOptions: {
    tokenMethod: 'bearer',
    superadminCredentials: {
      identifier: 'admin',
      password: 'admin',
    },
  },
  dbConnectionOptions: {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'sacred_stones',
    synchronize: true,
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  plugins: [
    AdminUiPlugin.init({
      route: 'admin',
      port: 3002,
    }),
  ],
};