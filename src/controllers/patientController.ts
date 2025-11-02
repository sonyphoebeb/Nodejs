import type { Request, Response } from "express";
import patientBusinessService from "../services/businessService/patientBusinessService.js";

const patientController = {
  createPatient: async (req: Request, res: Response) => {
    try {
      const patientData = req.body; // ✅ Actual data from Postman
      const patient = await patientBusinessService.createPatient(req.body);
      res.status(201).json(patient);
    } catch (error) {
      res.status(400).json({ message: (error as unknown as  Error).message });
    }
  },
};

export default patientController;
