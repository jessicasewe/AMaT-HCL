export interface Admin {
  name: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role: "admin";
  adminRole: "superadmin" | "manager" | "staff";
}
