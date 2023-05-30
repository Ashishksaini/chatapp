import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Joinpage from "./pages/JoinPage";
import Homepage from "./pages/Homepage";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="joining--page" element={<Joinpage />}></Route>
          <Route path="todo" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
