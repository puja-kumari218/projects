import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name !== "" && email !== "" && message !== "") {
      const newEntry = { name, email, message };
      setEntries([...entries, newEntry]);

      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Form</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />

        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />

        <textarea
          placeholder="Type Something"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border border-gray-400 px-3 py-2 w-full"
        />

        <button
          type="submit"
          className="bg-red-800 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <div className="mt-5">
        <h3 className="text-lg font-semibold mb-2">Submitted Entries:</h3>
        {entries.map((entry, index) => (
          <div key={index} className="mb-2 p-2 border rounded">
            <p className="text-black">Name: {entry.name}</p>
            <p className="text-black">Email: {entry.email}</p>
            <p className="text-black">Message: {entry.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
