import type { patientDTO } from "../../../models/patientDTO.js";

interface IpatientRepositoryService {
    createPatient(patient: typeof patientDTO): Promise<typeof patientDTO>;
}

export type { IpatientRepositoryService };