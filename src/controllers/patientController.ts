import type { Request, Response } from "express";
import patientService from "../services/patientService.js";

const patientController = {
    createPatient: async (req: Request, res: Response) => {
        const { name, age, gender } = req.body;
        const patient = await patientService.createPatient(name, age, gender);
        res.status(201).json(patient);
    }
}

export default patientController;