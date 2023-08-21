import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './controllers/employee/employee.module';
import { PostgresDatabaseModule } from './providers/database/postgres/provider.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      validationSchema: Joi.object({
        POSTGRES_HOST : Joi.string().required(),
        POSTGRES_PORT : Joi.number().required(),
        POSTGRES_USER : Joi.string().required(),
        POSTGRES_PASSWORD : Joi.string().required(),
        POSTGRES_DB : Joi.string().required(),
        PORT : Joi.number(),
      }),
    }),
    PostgresDatabaseModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}