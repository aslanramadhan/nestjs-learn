import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DSRevenueModule } from './controllers/ds-revenue/ds-revenue.module';
import { EmployeeModule } from './controllers/employee/employee.module';
import { MySQLDatabaseModule } from './providers/database/mysql/provider.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: Joi.object({
        MYSQL_HOST: Joi.string().required(),
        MYSQL_PORT: Joi.number().required(),
        MYSQL_USER: Joi.string().required(),
        MYSQL_PASSWORD: Joi.string().required(),
        MYSQL_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    MySQLDatabaseModule,
    DSRevenueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
