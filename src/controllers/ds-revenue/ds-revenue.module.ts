import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import DSRevenueHarian from "src/models/ds-revenue/entities/ds-revenue-harian.entity";
import DSRevenue from "src/models/ds-revenue/entities/ds-revenue.entity";
import { DSRevenueController } from "./ds-revenue.controller";
import { DSRevenueService } from "./ds-revenue.service";

/**
 * Every Service Needs An Module Files
 * Module Files is Used to Connect the Business Logic in Controller with 
 * Database Interraction in Service
 */
@Module({
    imports: [
        TypeOrmModule.forFeature([
            DSRevenue,
            DSRevenueHarian,
        ])
    ],
    controllers: [
        DSRevenueController
    ],
    providers: [
        DSRevenueService
    ]
})

export class DSRevenueModule { }