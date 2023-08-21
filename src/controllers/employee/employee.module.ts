import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Employee from "src/models/employee/entities/employee.entity";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";

/**
 * Every Service Needs An Module Files
 * Module Files is Used to Connect the Business Logic in Controller with 
 * Database Interraction in Service
 */
@Module({
    imports: [TypeOrmModule.forFeature([Employee])],
    controllers: [EmployeeController],
    providers: [EmployeeService]
})

export class EmployeeModule {}