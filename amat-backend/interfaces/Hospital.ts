import { Types } from "mongoose";

export interface Hospital {
  name: string;
  address?: string;
  contact?: {
    phone?: string;
    email?: string;
  };
  servicesOffered?: string[];
  otherHospitals?: Types.ObjectId[];
}
