import { Types } from "mongoose";
import { Patient } from "./Patient";
import { Doctor } from "./Doctor";
import { Nurse } from "./Nurse";

export interface Feedback {
  user: Types.ObjectId | Patient;
  targetUser: Types.ObjectId | Doctor | Nurse;
  targetUserModel: "Doctor" | "Nurse";
  rating: number;
  review?: string;
  date: Date;
}
