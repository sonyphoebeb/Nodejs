import { patientDTO } from "../../models/patientDTO.js";
import type { IpatientBusinessService } from "./interface/IpatientBusinessService.js";
      

const patientBusinessService: IpatientBusinessService = {
  createPatient: async (data: typeof patientDTO) => {
    return data;
  }
};

export default patientBusinessService;
