import React, { useState } from "react";

const API = `${import.meta.env.VITE_API_URL}/api/v1/notification/add`;

const AdminForm = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Saving...");

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message saved successfully!");
        setMessage("");
      } else {
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      setStatus(`❌ Error: ${err.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">📢 Admin: Set Notification</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full border rounded-lg p-3 mb-4"
          rows="4"
          placeholder="Enter notification message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Save Message
        </button>
      </form>

      {status && <p className="mt-4 text-sm">{status}</p>}
    </div>
  );
};

export default AdminForm;
