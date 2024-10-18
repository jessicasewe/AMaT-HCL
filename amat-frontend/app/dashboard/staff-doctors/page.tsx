"use client";
import DashboardNavbar from "@/app/_components/DashboardNavbar";
import MedicalDashboardSidebar from "@/app/_components/MedicalDashboardSidebar";
import { FaUser, FaUserMd, FaTrash, FaEdit } from "react-icons/fa";

export default function DoctorsPage() {
  const medicalprofessional = {
    fullName: "Dr. John Doe",
    initials: "DJD",
    profession: "Hospital Administrator",
  };

  const doctors = [
    {
      id: "D001",
      name: "Dr. Stella Johnson",
      specialty: "Cardiology",
      patients: 120,
    },
    {
      id: "D002",
      name: "Dr. Emma Brown",
      specialty: "Dermatology",
      patients: 95,
    },
    // Add more doctors as needed
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <MedicalDashboardSidebar medicalprofessional={medicalprofessional} />
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-md">
          <DashboardNavbar />
        </div>
        <div className="flex flex-col mt-4 mx-4">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Doctors Management
          </h2>
          <div className="flex justify-end mb-4">
            <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
              Add New Doctor
            </button>
          </div>
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-20">
                  Doctor ID
                </th>
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-20">
                  Name
                </th>
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-20">
                  Specialty
                </th>
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-20">
                  Patients Treated
                </th>
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-20">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className="text-left">
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40">
                    {doctor.id}
                  </td>
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://randomuser.me/api/portraits/women/3.jpg"
                        alt="Dr. Stella"
                        className="w-8 h-8 rounded-full border border-gray-300"
                      />
                      <span className="font-semibold">{doctor.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40">
                    {doctor.specialty}
                  </td>
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40">
                    {doctor.patients}
                  </td>
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40">
                    <button className="text-blue-600 hover:underline mr-3">
                      <FaEdit /> Edit
                    </button>
                    <button className="text-red-600 hover:underline">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
