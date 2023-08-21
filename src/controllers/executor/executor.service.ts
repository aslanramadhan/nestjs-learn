import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";

@Injectable()
export class ExecutorService {

    constructor(
        protected dataSource: DataSource
    ) { }

    async queryExecutor(query: string) {
        const runner = this.dataSource.createQueryRunner();
        await runner.connect();
        await runner.startTransaction();
        try {
            const result = await runner.query(query);
            await runner.commitTransaction();
            await runner.release();
            return result;
        } catch (error) {
            await runner.rollbackTransaction();
            await runner.release();
            return error;
        }
    }
}