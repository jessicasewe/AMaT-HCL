import { Types } from "mongoose";

export interface Nurse {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role: "nurse";
  department: string;
  certification?: string;
  hospital?: Types.ObjectId;
}
