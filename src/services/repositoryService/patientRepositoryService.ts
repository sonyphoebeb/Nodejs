import type patientDTO from "../../models/patientDTO.js";

const patientRepositoryService = {
    createPatient: async (patient: typeof patientDTO) => {
        return patient;
    }
}
export default patientRepositoryService;