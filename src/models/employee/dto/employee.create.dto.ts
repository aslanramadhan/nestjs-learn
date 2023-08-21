/**
 * Data Transfer Object for Entity to Limit Entity Interraction
 * This dto's purposes are creating data only
 */
export class CreateEmployee {
    fullName: string;
    address: string;
    dob: string;
    status: boolean;
}

export default CreateEmployee;