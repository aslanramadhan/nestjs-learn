import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

/**
 * Database Entity Representation
 * 1 File Entity Represent 1 Tables
 * @Entity('parameters'); paramaters = table name in db
 */
@Entity('erp_employee')
class Employee {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public fullName: string;

    @Column()
    public address: string;

    @Column({type : 'date'})
    public dob: string;

    @Column()
    public status: boolean;

    @CreateDateColumn()
    public createAt: string;

    @UpdateDateColumn()
    public lastUpdate: string;
}

export default Employee;