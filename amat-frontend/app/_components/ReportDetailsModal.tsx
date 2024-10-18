// ReportDetailsModal.js
"use client";
import { FaTimes } from "react-icons/fa";

const ReportDetailsModal = ({ isOpen, onClose, report }) => {
  if (!isOpen || !report) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-semibold mb-4">Report Details</h2>
        <button className="absolute top-2 right-2" onClick={onClose}>
          <FaTimes className="text-gray-600" />
        </button>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">
            Report ID: {report.id}
          </p>
          <p className="text-sm font-medium text-gray-700">
            Patient Name: {report.patientName}
          </p>
          <p className="text-sm font-medium text-gray-700">
            Date: {report.date}
          </p>
          <p className="text-sm font-medium text-gray-700">
            Report Type: {report.reportType}
          </p>
          <p className="text-sm font-medium text-gray-700">
            Status: {report.status}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700">Notes:</p>
          <p className="text-sm text-gray-600">{report.details}</p>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailsModal;
