import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [entries, setEntries] = useState([]);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message, number } = formData;

    if (name !== "" && email !== "" && message !== "" && number !== "") {
      setEntries([...entries, formData]);

      setFormData({
        name: "",
        email: "",
        message: "",
        number: "",
      });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Form</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Enter your Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />

        <textarea
          name="message"
          placeholder="Type Something"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />

        <input
          type="number"
          name="number"
          placeholder="Enter your Number"
          value={formData.number}
          onChange={(e) => handleChange("number", e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full mt-3"
        />

        <button
          type="submit"
          className="bg-red-800 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-2">Result</h3>
        {entries.map((entry, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            <p className="text-black">Name: {entry.name}</p>
            <p className="text-black">Email: {entry.email}</p>
            <p className="text-black">Message: {entry.message}</p>
            <p className="text-black">Number: {entry.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
