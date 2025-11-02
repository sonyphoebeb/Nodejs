import { Router } from "express";
import patientController from "../controllers/patientController.js";

const patientRoutes = Router();

patientRoutes.post("/createpatient", patientController.createPatient);

export default patientRoutes;   