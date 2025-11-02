const patientDTO = 

{
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    dateofbirth: { type: Date, required: true },
    mobileNumber: { type: Number, required: true },
    alternativeNumber: { type: Number },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: Number, required: true },
    country: { type: String, required: true },
    race: { type: String },
    homeboundPetient: { type: Boolean, required: true },
    hardStick: { type: Boolean, required: true },
    patientNotes: { type: String }
  }

export default patientDTO;