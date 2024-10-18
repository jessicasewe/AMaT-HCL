"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft, FaVideo } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import ProgressBar from "@/app/_components/ProgressBar";
import HealthProfileForm, {
  HealthProfileData,
} from "@/app/_components/dashboard/HealthProfileForm";
import ReviewProfile from "@/app/_components/dashboard/ReviewProfile";
import Image from "next/image";
import Doctor from "@/app/_assets/doctor.png";
import useLocalStorage from "@/app/hooks/useLocalStorage";
import DashboardNavMenu from "@/app/_components/dashboard/DashboardNavMenu"; // Mobile Sidebar
import DashboardSidebar from "@/app/_components/dashboard/Sidebar"; // Desktop Sidebar
import DashboardNavbar from "@/app/_components/dashboard/DashboardNavbar";

export default function Appointment() {
  const router = useRouter();
  const steps = ["Health Profile", "Review Profile", "Payment"];

  const [mounted, setMounted] = useState(false);
  const [profileData, setProfileData] = useLocalStorage<HealthProfileData>(
    "profileData",
    {
      healthConcern: "New Health Concern",
      howLong: "3 Days",
      symptoms: ["Difficulty sleeping", "Fever", "Loss of taste"],
      medications: [{ name: "Aspirin", duration: "Weeks" }],
      allergies: "No",
      conditions: "No",
      surgeries: "No",
      familyHistory: "No",
    }
  );

  const [currentStep, setCurrentStep] = useLocalStorage<number>(
    "currentStep",
    0
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // State for mobile sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleMenu = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = () => {
    setCurrentStep((prev: number) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev: number) => prev - 1);
  };

  const handleEdit = () => {
    setCurrentStep(0);
  };

  const handlePaymentConfirmation = () => {
    setIsModalOpen(true);
  };

  const clearData = () => {
    window.localStorage.removeItem("profileData");
    window.localStorage.removeItem("currentStep");
  };

  if (!mounted) {
    return null;
  }

  const Payment: React.FC<{ onPaymentConfirm: () => void }> = ({
    onPaymentConfirm,
  }) => {
    return (
      <div className="space-y-6">
        <button
          className="w-full bg-green-500 text-white py-3 rounded-md flex items-center justify-center mb-6 hover:bg-green-600 transition-colors duration-200"
          onClick={onPaymentConfirm}
        >
          <span>Pay GHS 300</span>
          <GiCheckMark className="w-5 h-5 ml-2" />
        </button>
      </div>
    );
  };

  // Define the patient details here or fetch from a context/state
  const patient = {
    initials: "JG",
    fullName: "Jessica Guriyire",
    profession: "Bad Bitch",
  };

  return (
    <>
    <div className="flex h-screen">
      {/* Mobile Sidebar Menu */}
      <DashboardNavMenu
        patient={patient}
        isOpen={isSidebarOpen}
        toggleMenu={toggleMenu}
      />

      {/* Desktop Sidebar Menu */}
      <DashboardSidebar patient={patient} />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <DashboardNavbar toggleMenu={toggleMenu} />

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="relative max-w-3xl mx-auto pt-9 p-6">
            {currentStep > 0 && (
              <button
                className="flex items-center text-blue-600 mb-4 hover:text-blue-800 transition-colors duration-200"
                onClick={handleBack}
              >
                <FaArrowLeft className="w-5 h-5 mr-2" />
                Back
              </button>
            )}

            {currentStep === 0 && (
              <>
                <h1 className="text-2xl font-bold text-black">
                  Health Profile
                </h1>
                <p className="text-gray-500 mb-4">
                  Kindly provide the patient’s medical information and history.
                </p>
              </>
            )}

            {currentStep === 1 && (
              <>
                <h1 className="text-2xl font-bold text-black">
                  Review Profile
                </h1>
                <p className="text-gray-500 mt-8 mb-4">
                  Make sure all details are correct as this information will aid
                  the Medical Practitioner.
                </p>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h1 className="text-2xl font-bold text-black">
                  Review and Confirm Payment
                </h1>
                <p className="text-gray-500 mb-4 mt-8">
                  Make sure all details are correct as this information will aid
                  the Medical Practitioner.
                </p>
              </>
            )}

            <ProgressBar
              stepsCompleted={currentStep + 1}
              totalSteps={steps.length}
            />

            {currentStep === 0 && (
              <HealthProfileForm
                initialData={profileData}
                onNext={(data: HealthProfileData) => {
                  setProfileData(data);
                  handleNext();
                }}
              />
            )}

            {currentStep === 1 && (
              <ReviewProfile
                data={profileData}
                onEdit={handleEdit}
                onNext={handleNext}
              />
            )}

            {currentStep === 2 && (
              <Payment onPaymentConfirm={handlePaymentConfirmation} />
            )}

            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                <div className="bg-white rounded-lg w-full max-w-md p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 relative">
                      <Image
                        src={Doctor}
                        alt="Doctor"
                        className="rounded-full object-cover"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h2 className="text-xl font-semibold text-black mt-4">
                      Your upcoming virtual meeting with <br />
                      <span className="text-blue-600">
                        Dr. Devis Joshua
                      </span>{" "}
                      has been scheduled.
                    </h2>
                    <p className="text-gray-500 mt-2">Today, 12:30PM GMT</p>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-purple-100 rounded-full p-2">
                          <FaVideo className="text-purple-600 w-6 h-6" />
                        </div>
                        <p className="text-gray-600">
                          You will be contacted via video call.
                        </p>
                      </div>
                      <button
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                        onClick={() => {
                          clearData();
                          setIsModalOpen(false);
                          router.push("/appointment/success");
                        }}
                      >
                        Confirm Appointment
                      </button>
                      <button
                        className="w-full border border-gray-300 text-gray-600 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
