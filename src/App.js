import React from "react";
import "./index.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "../src/pages/quiz";
import MakeQuiz from "../src/pages/MakeQuiz";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/createQuiz" element={<MakeQuiz />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
