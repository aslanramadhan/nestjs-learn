import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import CreateEmployee from 'src/models/employee/dto/employee.create.dto';
import UpdateEmployee from 'src/models/employee/dto/employee.update.dto';
import { EmployeeService } from './employee.service';

/**
 * Controller Employes
 * @Controller('parameter'), parameters = endpoint
 * Example : @Controller('employyee') means
 * http://localhost:3000/employee
 */
@Controller('employee')
export class EmployeeController {

    constructor(private readonly employeeService: EmployeeService) { }
    
    /**
     * Get Employee
     * This Function is Used to Retrieve All Employee data using HTTP GET Method
     * @Get('parameter') can be nulled or modified to customize the endpoint
     * Example : @Get('all-data') means
     * http://localhost:3000/employeee/all-data
     */
    @Get()
    getEmployee() {
        return this.employeeService.getAllEmployee();
    }

    /**
     * Get Employee By Id
     * This Function is Used to Retrieve Specific Employee data using HTTP GET Method
     * Example : @Get(':id') means
     * http://localhost:3000/employeee/{id}
     */
    @Get(':id')
    getEmployeeById(@Param('id') id: string) {
        return this.employeeService.getEmployeeById(Number(id));
    }

    /**
     * Create Employee
     * This Function is Used to Create New Employee data using HTTP POST Method
     * @Post('parameter') can be nulled or modified to customize the endpoint
     * Example : @Post('new-employee') means
     * http://localhost:3000/employeee/new-employee
     */
    @Post()
    async createEmployee(@Body() employee: CreateEmployee) {
        return this.employeeService.createEmployee(employee);
    }

    /**
     * Update Employee
     * This Function is Used to Update Specific Employee data using HTTP PUT Method
     * Example : @Put(':id') means
     * http://localhost:3000/employeee/{id}
     */
    @Put(':id')
    async updateEmployee(@Param('id') id: string, @Body() employee: UpdateEmployee) {
        return this.employeeService.updateEmployee(Number(id), employee);
    }

    /**
     * Delete Employee
     * This Function is Used to Delete Specific Employee data using HTTP DELETE Method
     * Example : @Delete(':id') means
     * http://localhost:3000/employeee/{id}
     */
    @Delete(':id')
    async deleteEmployee(@Param('id') id: string) {
        this.employeeService.deleteEmployee(Number(id));
    }

}