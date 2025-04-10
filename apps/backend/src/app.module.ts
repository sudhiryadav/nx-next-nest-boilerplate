import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './vendure-config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...config.dbConnectionOptions,
      autoLoadEntities: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {} 