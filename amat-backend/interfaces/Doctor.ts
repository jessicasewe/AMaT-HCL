import { Types } from "mongoose";

export interface Doctor {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role: "doctor";
  specialty: string;
  certification?: string;
  experience?: number;
  hospital?: Types.ObjectId;
}
