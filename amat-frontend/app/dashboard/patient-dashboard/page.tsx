"use client";
import { useState } from "react";
import DashboardNavbar from "@/app/_components/DashboardNavbar";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import Sidebar from "@/app/_components/Sidebar"; // Import Sidebar component
import Link from "next/link";
import { FaHeart, FaTachometerAlt } from "react-icons/fa";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

export default function PatientDashboard() {
  const patient = {
    fullName: "John Doe",
    initials: "JD",
    age: 45,
    profession: "Software Engineer",
    profilePicture:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
  };

  const heartRateData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Heart Rate",
        data: [72, 75, 80, 77, 76],
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };

  const bloodPressureData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Blood Pressure",
        data: [120, 118, 122, 125, 119],
        borderColor: "rgb(255, 99, 132)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const medicalHistory = [
    {
      checkupType: "General Checkup",
      doctor: "Dr. Sarah Lee",
      condition: "Stable",
      date: "2024-09-21",
      document: "checkup_invoice.pdf",
    },
    {
      checkupType: "Heart Checkup",
      doctor: "Dr. John Doe",
      condition: "Requires Monitoring",
      date: "2024-09-18",
      document: "heart_report.pdf",
    },
    {
      checkupType: "Blood Pressure Check",
      doctor: "Nurse Jane Smith",
      condition: "Normal",
      date: "2024-09-14",
      document: "bp_report.pdf",
    },
    {
      checkupType: "Dental Check",
      doctor: "Nurse Mercy Smith",
      condition: "Abnormal",
      date: "2024-09-21",
      document: "dc_report.pdf",
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar patient={patient} /> {/* Use the Sidebar component */}
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-md">
          <DashboardNavbar />
        </div>
        <div className="p-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <img
                src={patient.profilePicture}
                alt="Profile Picture"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {patient.fullName}
                </h2>
                <p className="text-gray-600 text-sm">Age: {patient.age}</p>
                <p className="text-gray-600 text-sm">
                  Profession: {patient.profession}
                </p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <FaHeart className="text-red-500 mr-3" />
                Heart Rate
              </h2>
              <div className="w-24 h-16">
                <Line data={heartRateData} options={chartOptions} />
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <FaTachometerAlt className="text-blue-500 mr-3" /> Blood
                Pressure
              </h2>
              <div className="w-24 h-16">
                <Line data={bloodPressureData} options={chartOptions} />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Medical History
            </h2>

            <div className="bg-white rounded-lg shadow-md p-4">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="pb-2">Checkup Type</th>
                    <th className="pb-2">Doctor/Nurse</th>
                    <th className="pb-2">Condition</th>
                    <th className="pb-2">Date</th>
                    <th className="pb-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 text-sm">
                  {medicalHistory.map((entry, index) => {
                    const initials = entry.checkupType
                      .split(" ")
                      .map((word) => word[0])
                      .join("");

                    return (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-3 flex items-center space-x-3">
                          <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white font-bold rounded-full">
                            {initials}
                          </div>
                          <span>{entry.checkupType}</span>
                        </td>
                        <td>{entry.doctor}</td>
                        <td>{entry.condition}</td>
                        <td>{entry.date}</td>
                        <td>
                          <Link
                            href={`/documents/${entry.document}`}
                            className="text-blue-500 hover:underline"
                          >
                            View Document
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
