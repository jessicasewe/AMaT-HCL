"use client";
import { FaHome, FaEnvelope, FaCalendarAlt, FaCog } from "react-icons/fa";
import Link from "next/link";

interface Patient {
  initials?: string;
  fullName?: string;
  profession?: string;
}

const Sidebar = ({ patient }: { patient: Patient }) => {
  return (
    <div className="w-60 bg-blue-800 shadow-md flex-shrink-0">
      <div className="flex items-center justify-center py-8">
        <div className="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-3xl font-bold">
          {patient.initials}
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-white">{patient.fullName}</p>
        <p className="text-sm text-white">{patient.profession}</p>
      </div>
      <div className="mt-8">
        <ul className="space-y-4">
          <li>
            <Link
              href="/dashboard"
              className="flex justify-between items-center py-2 px-4 text-base text-white hover:bg-blue-900 rounded-lg"
            >
              Dashboard
              <FaHome className="text-white text-xl" />
            </Link>
          </li>
          <li>
            <Link
              href="/messages"
              className="flex justify-between items-center py-2 px-4 text-base text-white hover:bg-blue-900 rounded-lg"
            >
              Messages
              <FaEnvelope className="text-white text-xl" />
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/appointment"
              className="flex justify-between items-center py-2 px-4 text-base text-white hover:bg-blue-900 rounded-lg"
            >
              Book Appointment
              <FaCalendarAlt className="text-white text-xl" />
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex justify-between items-center py-2 px-4 text-base text-white hover:bg-blue-900 rounded-lg"
            >
              Settings
              <FaCog className="text-white text-xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
