import { Types } from "mongoose";
import { Doctor } from "./Doctor";
import { Nurse } from "./Nurse";

export interface Schedule {
  user: Types.ObjectId | Doctor | Nurse;
  userModel: "Doctor" | "Nurse";
  date: Date;
  startTime: string;
  endTime: string;
  status: "available" | "booked";
}
