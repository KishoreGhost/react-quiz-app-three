import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/HomeCompo";
import Quiz from "./components/QuizCompo";
import Result from "./components/ResultCompo";
import questions from './resources/quizQuestion.json'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz questions={questions} />} />
        <Route path="/result" element={<Result />} />

      </Routes>
    </Router>
  );
}

export default App;