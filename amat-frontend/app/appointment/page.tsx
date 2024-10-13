'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { FaArrowLeft, FaVideo, FaCalendarAlt } from 'react-icons/fa';
import { GiCheckMark } from 'react-icons/gi';
import ProgressBar from '../_components/ProgressBar';
import HealthProfileForm from '../_components/HealthProfileForm';
import ReviewProfile from '../_components/ReviewProfile';
import Image from "next/image";
import Doctor from "../_assets/doctor.png";
import useLocalStorage from '../hooks/useLocalStorage';

export default function Appointment() {
  const router = useRouter(); 

  const steps = ['Health Profile', 'Review Profile', 'Payment'];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [profileData, setProfileData] = useLocalStorage<HealthProfileData>('profileData', {
    healthConcern: 'New Health Concern',
    howLong: '3 Days',
    symptoms: ['Difficulty sleeping', 'Fever', 'Loss of taste'],
    medications: [{ name: 'Aspirin', duration: 'Weeks' }],
    allergies: 'No',
    conditions: 'No',
    surgeries: 'No',
    familyHistory: 'No',
  });

  const [currentStep, setCurrentStep] = useLocalStorage<number>('currentStep', 0);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleEdit = () => {
    setCurrentStep(0);
  };

  const handlePaymentConfirmation = () => {
    setIsModalOpen(true);
  };

  const clearData = () => {
    window.localStorage.removeItem('profileData');
    window.localStorage.removeItem('currentStep');
  };

  if (!mounted) {
    return null; 
  }

  const Payment: React.FC<{ onPaymentConfirm: () => void }> = ({ onPaymentConfirm }) => {
    return (
      <div className="space-y-6">
        {/* Appointment Details */}
        <div className="mb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-16 h-16 relative">
              <Image
                src={Doctor}
                alt="Doctor"
                className="rounded-full object-cover"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                Video Consultation
              </span>
              <h2 className="text-lg font-semibold text-black">Dr. Devis Joshua</h2>
              <p className="text-sm text-gray-600">General Doctor, Hisglory Specialist Hospitals.</p>
              <p className="text-sm text-gray-900 font-medium">
                Today, 12:30pm <span className="text-gray-500">(30mins)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
          <h2 className="text-lg font-bold text-black mb-2">Order Summary</h2>
          <p className="text-gray-600 mb-1">
            Primary Care Visit Fee
            <span className="block text-gray-500 text-sm">With Dr. Devis Joshua</span>
            <span className="block text-gray-500 text-sm">Today, 12:30PM GMT</span>
          </p>
          <p className="text-lg font-medium">GHS 300</p>
          <div className="mt-2 flex justify-between">
            <p className="text-gray-600">Discount</p>
            <p className="text-gray-600">GHS 0.00</p>
          </div>
          <div className="mt-4 flex justify-between text-lg font-bold text-black">
            <p>Today's Total</p>
            <p>GHS 300</p>
          </div>
        </div>

        {/* Payment Section */}
        <h1 className="text-2xl font-bold text-black mb-4">Nomso’s Visit</h1>
        <p className="text-gray-500 mb-6">
          Make payment to confirm your appointment with your doctor.
        </p>

        {/* Payment Button */}
        <button
          className="w-full bg-green-500 text-white py-3 rounded-md flex items-center justify-center mb-6"
          onClick={onPaymentConfirm}
        >
          <span>Pay GHS 300</span>
          <GiCheckMark className="w-5 h-5 ml-2" />
        </button>
      </div>
    );
  };

  return (
    <div className="relative max-w-3xl mx-auto pt-28 p-6">
      {/* Global Back Button */}
      <button
        className="absolute top-4 left-4 text-gray-600 hover:text-gray-800"
        onClick={() => router.back()}
        aria-label="Go Back"
      >
        <FaArrowLeft className="w-6 h-6" />
      </button>

      {/* Back Button for Steps */}
      {currentStep > 0 && (
        <button
          className="flex items-center text-blue-600 mb-4"
          onClick={handleBack}
        >
          <FaArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>
      )}

      {/* Title and Description */}
      {currentStep === 0 && (
        <>
          <h1 className="text-2xl font-bold text-black">Health Profile</h1>
          <p className="text-gray-500 mb-4">
            Kindly provide the patient’s medical information and history.
          </p>
        </>
      )}

      {currentStep === 1 && (
        <>
          <h1 className="text-2xl font-bold text-black">Review Profile</h1>
          <p className="text-gray-500 mt-8 mb-4">
            Make sure all details are correct as this information will aid the Medical Practitioner.
          </p>
        </>
      )}

      {currentStep === 2 && (
        <>
          <h1 className="text-2xl font-bold text-black">Review and Confirm Payment</h1>
          <p className="text-gray-500 mb-4 mt-8">
            Make sure all details are correct as this information will aid the Medical Practitioner.
          </p>
        </>
      )}

      {/* Progress Bar */}
      <ProgressBar stepsCompleted={currentStep + 1} totalSteps={steps.length} />

      {/* Content Sections */}
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

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6">
            {/* Modal Content */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <Image
                  src={Doctor}
                  alt="Doctor"
                  className="rounded-full object-cover"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h2 className="text-xl font-semibold text-black mt-4">
                Your upcoming virtual meeting with <br />
                <span className="text-blue-600">Dr. Devis Joshua</span> has been scheduled.
              </h2>
              <p className="text-gray-500 mt-2">
                Today, 12:30PM GMT
              </p>

              {/* Options Section */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 rounded-full p-2">
                    <FaVideo className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Test your device prior to visit</h3>
                    <p className="text-sm text-gray-500">
                      Make sure video, audio, and internet connections are working.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <FaCalendarAlt className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Schedule an Appointment</h3>
                    <p className="text-sm text-gray-500">
                      Schedule an appointment with available doctors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                className="bg-blue-500 text-white py-3 px-6 rounded-lg w-full mt-6 flex items-center justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
