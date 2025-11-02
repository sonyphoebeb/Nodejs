import type { patientDTO } from "../../../models/patientDTO.js";

export interface IpatientBusinessService {  
    createPatient(patient: typeof patientDTO): Promise<typeof patientDTO>;
}