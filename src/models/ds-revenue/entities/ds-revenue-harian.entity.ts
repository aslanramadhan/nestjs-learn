import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Database Entity Representation
 * 1 File Entity Represent 1 Tables
 * @Entity('parameters'); paramaters = table name in db
 */
@Entity('ds_revenue_harian')
class DSRevenueHarian {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'varchar', length: 3, nullable: true })
    public cloc: string;

    @Column({ type: 'decimal', precision: 11, scale: 2 })
    public namount: number;

    @Column({ type: 'decimal', precision: 11, scale: 2 })
    public nrev_mmksi: number;

    @Column({ type: 'decimal', precision: 11, scale: 2 })
    public nrev_ktb: number;

    @Column({ type: 'varchar', length: 2, nullable: true })
    public ckd_dept: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    public capm: string;
}

export default DSRevenueHarian;