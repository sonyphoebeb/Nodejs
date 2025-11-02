import type patientDTO from "../../../models/patientDTO.js";

interface IpatientBusinessService {
    createPatient(patient: typeof patientDTO): Promise<typeof patientDTO>;
}

export type { IpatientBusinessService };