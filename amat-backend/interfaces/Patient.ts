export interface Patient {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role: "patient";
  dateOfBirth?: Date;
  medicalHistory?: string;
  insuranceNumber?: string;
}
