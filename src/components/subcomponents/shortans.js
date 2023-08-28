import React, { useState } from "react";
import "./css/short.css";

const ShortAnswerComponent = ({ question, correctAnswer }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const checkAnswer = () => {
    const formattedUserAnswer = userAnswer.trim().toLowerCase();
    const formattedCorrectAnswer = correctAnswer.trim().toLowerCase();

    if (formattedUserAnswer === formattedCorrectAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="short-answer-container">
      <h2 className="question">Question</h2>
      <p>{question}</p>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Your answer..."
        />
        <button className="next-button" onClick={checkAnswer}>
          Check Answer
        </button>
      </div>
      {isCorrect === true && (
        <p className="answer-feedback correct-answer">Correct!</p>
      )}
      {isCorrect === false && (
        <p className="answer-feedback incorrect-answer">
          Incorrect. The correct answer is: {correctAnswer}
        </p>
      )}
    </div>
  );
};

export default ShortAnswerComponent;
