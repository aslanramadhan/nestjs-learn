import { IsNotEmpty, Length, Max, Min } from 'class-validator';
/**
 * Data Transfer Object for Entity to Limit Entity Interraction
 * This dto's purposes are creating data only
 */
export class CreateDSRevenue {
    @IsNotEmpty()
    cloc: string;

    @Min(1)
    @Max(12)
    @IsNotEmpty()
    nbln: number;

    @Length(4, 4)
    nthn: number;

    @Min(0)
    @IsNotEmpty()
    ngf: number;
}

export default CreateDSRevenue;