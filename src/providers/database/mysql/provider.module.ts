import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

// Database Configuration Module Provider
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'mysql',
                host: configService.get('MYSQL_HOST'),
                port: configService.get('MYSQL_PORT'),
                username: configService.get('MYSQL_USER'),
                password: configService.get('MYSQL_PASSWORD'),
                database: configService.get('MYSQL_DB'),
                entities: [
                    'dist/models/**/**/*.entity.{ts,js}'
                ],
                // ssl: {
                //     rejectUnauthorized : false
                // },
                ssl: false,
                synchronize: false,
            })
        })
    ],
})

export class MySQLDatabaseModule { }