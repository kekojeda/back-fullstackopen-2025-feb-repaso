import patients from "../data/patients";
import { Patient } from "../types";
import { NonSensitivePatient } from "../types";


const getPatients = (): Patient[] => {
    return patients;
  };

const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
      }));
}

export default { getPatients, getNonSensitivePatients };