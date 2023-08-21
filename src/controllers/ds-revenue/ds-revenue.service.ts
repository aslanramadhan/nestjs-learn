import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import DSRevenueHarian from "src/models/ds-revenue/entities/ds-revenue-harian.entity";
import DSRevenue from "src/models/ds-revenue/entities/ds-revenue.entity";
import { DataSource, Repository } from "typeorm";
import { ExecutorService } from "../executor/executor.service";

@Injectable()
export class DSRevenueService extends ExecutorService {

    constructor(
        @InjectRepository(DSRevenue) private readonly dsRevenueRepository: Repository<DSRevenue>,
        @InjectRepository(DSRevenueHarian) private readonly dsRevenueHarianRepository: Repository<DSRevenueHarian>,
        dataSource: DataSource
    ) {
        super(dataSource);
    }

    async getAllDataRevenue() {
        return this.dsRevenueRepository.find();
    }

    async getAllDataRevenueByLocation(cloc: string) {
        return this.dsRevenueRepository.find({ where: { cloc: cloc } });
    }

    async getDataRevenueByCloc(cloc: string) {
        const query = "SELECT * FROM ds_revenue WHERE cloc = '" + cloc + "'";
        return await this.queryExecutor(query);
    }

    async getRevenueMonthly(month: string, year: string, cloc: string) {
        console.log({
            cloc: cloc,
            nthn: Number(year),
            nbln: Number(month)
        })
        // SELECT * FROM ds_revenue WHERE cloc = 'JKT' AND nbln = 12 AND nthn = 2023
        return await this.dsRevenueRepository.find({
            where: {
                cloc: cloc,
                nthn: Number(year),
                nbln: Number(month)
            }
        })
    }
}