import React, { useEffect, useState } from "react";
import axios from "axios";

const WalletBalance = ({ userId }) => {
  console.log(userId);
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/users/balance/${userId}`
        );
        setBalance(response.data.balance);
      } catch (err) {
        setError("Failed to fetch balance");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchBalance();
    }
  }, [userId]);

  if (loading) return <p>Loading balance...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">Wallet Balance</h2>
      <p className="text-2xl mt-2">₹{balance}</p>
    </div>
  );
};

export default WalletBalance;
