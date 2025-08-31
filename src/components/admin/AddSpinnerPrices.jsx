import React from "react";

export const AddSpinnerPrices = () => {
  //     Add Api
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const price = formData.get("price");

    // Call your API to add the price
    console.log("Adding price:", price);
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Add Spinner Prices</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Price:</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Add Price
        </button>
      </form>
    </section>
  );
};
