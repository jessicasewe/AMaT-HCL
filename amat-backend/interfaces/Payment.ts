import { Types } from "mongoose";
import { Patient } from "./Patient";
import { Appointment } from "./Appointment";

export interface Payment {
  patient: Types.ObjectId | Patient;
  appointment: Types.ObjectId | Appointment;
  amount: number;
  status: "pending" | "completed" | "failed";
  paymentMethod: "credit_card" | "mobile_money" | "bank_transfer";
  timestamp: Date;
}
