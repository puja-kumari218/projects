import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Form from "./pages/Form";
import "./index.css";

function App() {
  return (
    <div className="text-center p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
