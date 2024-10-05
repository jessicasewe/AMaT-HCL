import { Types } from "mongoose";
import { Doctor } from "./Doctor";
import { Patient } from "./Patient";

export interface Telemedicine {
  doctor: Types.ObjectId | Doctor;
  patient: Types.ObjectId | Patient;
  date: Date;
  startTime: string;
  endTime: string;
  status: "scheduled" | "completed" | "canceled";
  platform: "Zoom" | "Google Meet" | string;
  meetingLink?: string;
}
