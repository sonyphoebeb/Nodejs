

const patientService = {
    createPatient: async (name: string, age: number, gender: string) => {
        return { name, age, gender };
    }
}
export default patientService;