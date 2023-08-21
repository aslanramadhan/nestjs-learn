import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Database Entity Representation
 * 1 File Entity Represent 1 Tables
 * @Entity('parameters'); paramaters = table name in db
 */
@Entity('ds_revenue')
class DSRevenue {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', length: 3, nullable: true })
    public cloc: string;

    @Column({ type: 'int', width: 11, nullable: true })
    public nbln: number;

    @Column({ type: 'int', width: 11, nullable: true })
    public nthn: number;

    @Column({ type: 'decimal', precision: 15, scale: 0 })
    public ngf: number;
}

export default DSRevenue;