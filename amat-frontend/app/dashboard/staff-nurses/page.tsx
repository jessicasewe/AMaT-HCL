"use client";
import { useState } from "react";
import DashboardNavbar from "@/app/_components/DashboardNavbar";
import MedicalDashboardSidebar from "@/app/_components/MedicalDashboardSidebar";
import { FaUser, FaUserNurse, FaTrash, FaEdit, FaPlus } from "react-icons/fa";
import AddNurseModal from "@/app/_components/AddNurseModal";

export default function NursesPage() {
  const medicalprofessional = {
    fullName: "Dr. John Doe",
    initials: "DJD",
    profession: "Hospital Administrator",
  };

  const nurses = [
    {
      id: "N001",
      name: "Nurse Jane Smith",
      department: "Pediatrics",
      patients: 50,
    },
    {
      id: "N002",
      name: "Nurse Emma White",
      department: "Cardiology",
      patients: 30,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddNurse = async (nurseDetails: any) => {
    const response = await fetch("/api/addNurse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nurseDetails),
    });

    if (!response.ok) {
      console.error("Error adding nurse");
    } else {
      console.log("Nurse added successfully!");
      // Optionally, you could refresh the nurses list or handle state updates here
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      <MedicalDashboardSidebar medicalprofessional={medicalprofessional} />
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-md">
          <DashboardNavbar />
        </div>
        <div className="flex flex-col mt-4 mx-4">
          <h2 className="text-2xl font-bold mb-4 text-black">
            Nurses Management
          </h2>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500"
            >
              Add New Nurse
            </button>
          </div>
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr className="text-left">
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-20">
                  Nurse ID
                </th>
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-40">
                  Name
                </th>
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-40">
                  Department
                </th>
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-40">
                  Patients Treated
                </th>
                <th className="py-2 px-4 text-black text-sm whitespace-nowrap w-40">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {nurses.map((nurse) => (
                <tr key={nurse.id} className="text-left">
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40">
                    {nurse.id}
                  </td>
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <img
                        src="https://randomuser.me/api/portraits/women/4.jpg"
                        alt="Nurse Jane"
                        className="w-8 h-8 rounded-full border border-gray-300"
                      />
                      <span className="font-semibold">{nurse.name}</span>
                    </div>
                  </td>
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40">
                    {nurse.department}
                  </td>
                  <td className="py-2 px-4 text-black text-xs whitespace-nowrap w-40">
                    {nurse.patients}
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

      <AddNurseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddNurse}
      />
    </div>
  );
}
