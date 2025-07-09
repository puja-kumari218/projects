import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Form from "./pages/Form";
import Modal from "./pages/Modal"; 

function App() {
  return (
    <div className="text-center p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
