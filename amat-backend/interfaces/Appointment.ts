import { Types } from "mongoose";
import { Doctor } from "./Doctor";
import { Nurse } from "./Nurse";
import { Patient } from "./Patient";

export interface Appointment {
  staff: Types.ObjectId | Doctor | Nurse;
  staffModel: "Doctor" | "Nurse";
  patient: Types.ObjectId | Patient;
  date: Date;
  time: string;
  status: "scheduled" | "completed" | "canceled";
  reason?: string;
}
