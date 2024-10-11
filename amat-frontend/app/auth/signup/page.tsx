"use client";
import logo from "../../_assets/logo.png";
import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [currentSection, setCurrentSection] = useState(1);

  const handleContinue = () => {
    if (currentSection < 4) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handleBack = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-5 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <Image
          className="mx-auto w-auto mb-3"
          src={logo}
          alt="AMaT-HCL"
          width={70}
          height={70}
        /> */}
        <h2 className="mt-9 text-center text-2xl font-bold leading-9 tracking-tight text-blue-900">
          Sign up for an account
        </h2>
        <div className="text-sm text-center text-blue-900">
          Let's get you started. Please enter your details
        </div>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" action="#" method="POST">
          {/* First Section */}
          {currentSection === 1 && (
            <>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Full Name
                </label>
                <div>
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Date of Birth
                </label>
                <div>
                  <input
                    id="dob"
                    name="dob"
                    type="date"
                    autoComplete="bday"
                    required
                    placeholder="Enter your date of birth"
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Gender
                </label>
                <div>
                  <select
                    id="gender"
                    name="gender"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Email
                </label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="Enter your email address"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </>
          )}

          {/* Second Section */}
          {currentSection === 2 && (
            <>
              <div>
                <label
                  htmlFor="phonenumber"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Phone Number
                </label>
                <div>
                  <input
                    id="phonenumber"
                    name="phonenumber"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    autoComplete="tel"
                    required
                    placeholder="Enter your phone number"
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-900 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Address
                </label>
                <div>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter your address"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  City
                </label>
                <div>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Country
                </label>
                <div>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Enter your country"
                    required
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </>
          )}

          {/* Third Section (Medical History) */}
          {currentSection === 3 && (
            <>
              <div>
                <label
                  htmlFor="preexisting_conditions"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Pre-existing Conditions
                </label>
                <div>
                  <textarea
                    id="preexisting_conditions"
                    name="preexisting_conditions"
                    rows={4}
                    placeholder="List chronic illnesses, allergies, past surgeries, etc."
                    required
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="current_medications"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Current Medications
                </label>
                <div>
                  <textarea
                    id="current_medications"
                    name="current_medications"
                    rows={4}
                    placeholder="List any medications you are currently taking."
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </>
          )}

          {/* Fourth Section (Security) */}
          {currentSection === 4 && (
            <>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Password
                </label>
                <div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    placeholder="Create your password"
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirm_password"
                  className="block text-sm font-medium leading-6 text-blue-900"
                >
                  Confirm Password
                </label>
                <div>
                  <input
                    id="confirm_password"
                    name="confirm_password"
                    type="password"
                    autoComplete="new-password"
                    required
                    placeholder="Confirm your password"
                    className="block w-full rounded-md border-0 py-2 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-blue-900 bg-white border-blue-900 focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md text-white bg-blue-900 border-transparent focus:ring-2 focus:ring-inset focus:ring-blue-600"
            >
              {currentSection === 4 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
