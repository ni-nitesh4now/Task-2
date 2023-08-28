import React, { useState } from "react";
import "./css/fill.css";

const FillInTheBlanksComponent = ({ questionData }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questionData[currentQuestionIndex];
  const { sentence, correctWord } = currentQuestion;

  const checkAnswer = () => {
    const formattedUserAnswer = userAnswer.trim().toLowerCase();
    const formattedCorrectWord = correctWord.trim().toLowerCase();

    if (formattedUserAnswer === formattedCorrectWord) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer("");
    setIsCorrect(null);
    if (currentQuestionIndex < questionData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Quiz completed.");
    }
  };

  return (
    <div className="fill-in-the-blanks-container">
      <p className="sentence">{sentence.replace("__", userAnswer)}</p>
      <input
        className="user-answer-input"
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        placeholder="Your answer..."
      />
      <button className="check-button" onClick={checkAnswer}>
        Check Answer
      </button>
      {isCorrect === true && (
        <p className="answer-feedback correct-answer">Correct!</p>
      )}
      {isCorrect === false && (
        <p className="answer-feedback incorrect-answer">
          Incorrect. The correct word is: {correctWord}
        </p>
      )}
      {isCorrect !== null && (
        <button className="next-button" onClick={handleNextQuestion}>
          Next Question
        </button>
      )}
    </div>
  );
};

export default FillInTheBlanksComponent;
