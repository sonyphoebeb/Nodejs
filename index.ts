import patientRoutes from "./src/routes/patientRoutes.js";

    const express = require("express");
    const app = express();
    app.use(express.json());

    app.use(patientRoutes);
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });