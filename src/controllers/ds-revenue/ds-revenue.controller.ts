import { Body, Controller, Req, Get, Param, Post, Put, Query } from '@nestjs/common';
import UpdateDSRevenue from 'src/models/ds-revenue/dto/ds-revenue.update.dto';
import { DSRevenueService } from './ds-revenue.service';


/**
 * Controller Employes
 * @Controller('parameter'), parameters = endpoint
 * Example : @Controller('employyee') means
 * http://localhost:3000/dashboard/revenue
 */
@Controller('dashboard/revenue')
export class DSRevenueController {

    constructor(
        private readonly dsRevenueService: DSRevenueService,
    ) { }

    // localhost:3000/dashboard/revenue/all
    @Get('all')
    async getAllDataRevenue() {
        return await this.dsRevenueService.getAllDataRevenue();
    }

    // localhost:3000/dashboard/revenue/location?cloc=JKT
    @Get('location')
    async getAllDataRevenueByLocation(@Query('cloc') cloc: string) {
        return await this.dsRevenueService.getAllDataRevenueByLocation(cloc);
    }

    // localhost:3000/dashboard/revenue/loc/JKT
    @Get('location/:cloc')
    async getAllDataRevenueByLocations(@Param('cloc') cloc: string) {
        return await this.dsRevenueService.getAllDataRevenueByLocation(cloc);
    }

    // $_GET['nama_param']
    // $_POST['post_param']
    // $_REQUEST['nama_param'] / $_REQUEST['post_param']
    @Post('location')
    async getAllDataRevenueByLocationsPost(
        @Body() data: UpdateDSRevenue
    ) {
        return await this.dsRevenueService.getRevenueMonthly(Number(data.nbln).toString(),
            Number(data.nthn).toString(), data.cloc);
    }

    @Post('location/req')
    async getAllDataRevenueByLocationsReqs(
        @Req() req
    ) {
        console.log(req);
        return await this.dsRevenueService.getRevenueMonthly(req.body.month,
            req.body.year, req.body.loc);
    }

    // localhost:3000/dashboard/revenue/loc/JKT?month=12&year=2023
    @Get('loc/:cloc')
    async getRevenueMonthly(
        @Query('month') month: string,
        @Query('year') year: string,
        @Param('cloc') cloc: string
    ) {
        return await this.dsRevenueService.getRevenueMonthly(month, year, cloc);
    }

    @Get('report')
    async getRevenueRawQuery(
        @Query('location') loc: string,
    ) {
        return await this.dsRevenueService.getDataRevenueByCloc(loc);
    }
}