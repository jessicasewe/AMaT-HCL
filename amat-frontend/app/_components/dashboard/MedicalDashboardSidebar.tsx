"use client";
import { useState } from "react";
import {
  FaUserFriends,
  FaFileAlt,
  FaUser,
  FaHome,
  FaComments,
} from "react-icons/fa";

{
  /* Custom SVG components for the dropdown toggle */
}
const OpenIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline"
  >
    <path d="M8 4l8 8-8 8" />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline"
  >
    <path d="M16 4l-8 8 8 8" />
  </svg>
);

interface MedicalProfessional {
  fullName?: string;
  initials?: string;
  profession?: string;
}

const MedicalDashboardSidebar = ({
  medicalprofessional,
}: {
  medicalprofessional: MedicalProfessional;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-60 bg-gray-200 shadow-md flex-shrink-0">
      <div className="flex items-center justify-center py-8">
        <div className="bg-white text-black w-16 h-16 flex items-center justify-center rounded-full text-3xl font-bold">
          {medicalprofessional.initials}
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold text-black">
          {medicalprofessional.fullName}
        </p>
        <p className="text-sm text-black">{medicalprofessional.profession}</p>
      </div>
      <div className="mt-8">
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="flex justify-between items-center py-2 px-4 text-base text-black hover:bg-blue-200 rounded-lg"
            >
              Dashboard
              <FaHome className="text-gray-700 text-xl" />
            </a>
          </li>
          <li>
            <a
              href="/dashboard"
              className="flex justify-between items-center py-2 px-4 text-base text-black hover:bg-blue-200 rounded-lg"
            >
              Patients
              <FaUser className="text-gray-700 text-xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={toggleDropdown}
              className="flex justify-between items-center py-2 px-4 text-base text-black hover:bg-blue-200 rounded-lg"
            >
              Staff
              <span>{isDropdownOpen ? <CloseIcon /> : <OpenIcon />}</span>
            </a>
            {isDropdownOpen && (
              <ul className="ml-6 mt-2 space-y-2 bg-blue-200 rounded-lg">
                <li>
                  <a
                    href="/dashboard/staff-doctors"
                    className="flex items-center py-2 px-4 text-black hover:bg-blue-300 rounded-lg"
                  >
                    Doctor
                  </a>
                </li>
                <li>
                  <a
                    href="/dashboard/staff-nurses"
                    className="flex items-center py-2 px-4 text-black hover:bg-blue-300 rounded-lg"
                  >
                    Nurse
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="/dashboard/lab-reports"
              className="flex justify-between items-center py-2 px-4 text-base text-black hover:bg-blue-200 rounded-lg"
            >
              Lab Reports
              <FaFileAlt className="text-gray-700 text-xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-between items-center py-2 px-4 text-base text-black hover:bg-blue-200 rounded-lg"
            >
              My Team
              <FaUserFriends className="text-gray-700 text-xl" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex justify-between items-center py-2 px-4 text-base text-black hover:bg-blue-200 rounded-lg"
            >
              Chat
              <FaComments className="text-gray-700 text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MedicalDashboardSidebar;
