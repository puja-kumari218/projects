import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input !== '') {
      setEntries([...entries, input]);
      setInput('');
    }
  };

  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something..."
          value={input}
          onChange={(e) => setInput(e.target.value)} className="border border-gray-400"
        />
        <button type="submit">Add</button>
      </form>

      <div>
        <h3>
          {entries.map((item, index) => (
            <h4 key={index}>{item}</h4>
          ))}
        </h3>
      </div>
    </div>
  );
};

export default Form;
