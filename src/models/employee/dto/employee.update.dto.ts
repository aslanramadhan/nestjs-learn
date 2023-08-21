/**
 * Data Transfer Object for Entity to Limit Entity Interraction
 * This dto's purposes are updating data only
 */
export class UpdateEmployee {
    id: number;
    fullName: string;
    address: string;
    dob: string;
    status: boolean;
}

export default UpdateEmployee;