import type patientDTO from "../../models/patientDTO.js";
import type { IpatientBusinessService } from "./interface/IpatientBusinessService.js";

const patientBusinessService: IpatientBusinessService = {
    createPatient: async (patient: typeof patientDTO) => {
        return patient;
    }
}
export default patientBusinessService;