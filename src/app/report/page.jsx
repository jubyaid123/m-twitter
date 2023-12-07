"use client"

// ReportPage.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ReportPage = () => {
  const [reportDescription, setReportDescription] = useState('');
  const [selectedReason, setSelectedReason] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleDescriptionChange = (event) => {
    setReportDescription(event.target.value);
  };

  const handleReasonChange = (event) => {
    setSelectedReason(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleReportSubmit = () => {
    // Handle the report submission logic here
    console.log('Report description:', reportDescription);
    console.log('Selected reason:', selectedReason);
    console.log('Username:', username);
    // You can add additional logic for submitting the report

    // Go back to the previous page
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Report</h2>

        <label htmlFor="username" className="mb-2">
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />

        <label htmlFor="description" className="mb-2">
          Description:
        </label>
        <textarea
          id="description"
          value={reportDescription}
          onChange={handleDescriptionChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          rows={4}
        ></textarea>

        <label htmlFor="reason" className="mb-2">
          Reason for Reporting:
        </label>
        <select
          id="reason"
          value={selectedReason}
          onChange={handleReasonChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="" disabled>
            Select a reason
          </option>
          <option value="harassment">Harassment</option>
          <option value="spam">Spam</option>
          <option value="inappropriate_content">Inappropriate Content</option>
          <option value="Verbal Abuse">Verbal Abuse</option>
        </select>

        <button
          onClick={handleReportSubmit}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReportPage;