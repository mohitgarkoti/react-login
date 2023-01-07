import React, { useState } from "react";
import Navbar from "./Navbar";
export default function App() {
  const questions = [
    {
      questionText: "What is the capital of india?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "india", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of uttarakhand?",
      answerOptions: [
        { answerText: "champawat", isCorrect: false },
        { answerText: "dehradun", isCorrect: true },
        { answerText: "almora", isCorrect: false },
        { answerText: "nainital", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Maharashtra?",
      answerOptions: [
        { answerText: "Mumbai", isCorrect: true },
        { answerText: "surat", isCorrect: false },
        { answerText: "gandhinagar", isCorrect: false },
        { answerText: "rajkot", isCorrect: false },
      ],
    },
    {
      questionText: "What is the capital of Assam?",
      answerOptions: [
        { answerText: "gandhinagar", isCorrect: false },
        { answerText: "patna", isCorrect: false },
        { answerText: "surat", isCorrect: false },
        { answerText: "Dispur", isCorrect: true },
      ],
    },
    {
      questionText: "What is the capital of Bihar?",
      answerOptions: [
        { answerText: "gandhinagar", isCorrect: false },
        { answerText: "patna", isCorrect: false },
        { answerText: "surat", isCorrect: false },
        { answerText: "patna", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <>
      <Navbar />
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
