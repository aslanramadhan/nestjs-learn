import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateEmployee from 'src/models/employee/dto/employee.create.dto';
import { UpdateEmployee } from 'src/models/employee/dto/employee.update.dto';
import Employee from 'src/models/employee/entities/employee.entity';

/**
 * Service Employes
 * This Service is Used to Interract Business Logic from Controller
 * To Datamodel, in this case to database using postgresql
 */
@Injectable()
export class EmployeeService {

    /**
     * Define Service Object to Using Employee Entity in Models
     */
    constructor(
        @InjectRepository(Employee) private employeeRepository : Repository<Employee>,
    ) { }
    
    /**
     * Get All Employee to Retrieve All Data From Entity in Models
     */
    getAllEmployee() {
        return this.employeeRepository.find();
    }

    
    /**
     * Get Specific Employee to Retrieve Data From Entity in Models using Specific Conditions
     */
    async getEmployeeById(id: number) {
        const employee = await this.employeeRepository.findOne({where: {id: id}});
        if (employee) {
            return employee;
        }

        throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }

    /**
     * Create New Employee Data via Models using Create DTO (data transfer object)
     */
    async createEmployee(employee: CreateEmployee) {
        const newEmployee = this.employeeRepository.create(employee);
        await this.employeeRepository.save(newEmployee);

        return newEmployee;
    }

    /**
     * Update Employee Data via Models using Update DTO (data transfer object)
     */
    async updateEmployee(id: number, data: UpdateEmployee) {
        await this.employeeRepository.update(id, data);
        const updatedEmployee = await this.employeeRepository.findOne({where: {id: id}});
        if (updatedEmployee) {
            return updatedEmployee;
        }

        throw new HttpException('Employee Not Found', HttpStatus.NOT_FOUND);
    }

    /**
     * Delete Employee Data via Models
     */
    async deleteEmployee(id: number) {
        const deletedEmployee = await this.employeeRepository.delete(id);
        if (!deletedEmployee.affected) {
            throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
        }
    }
}