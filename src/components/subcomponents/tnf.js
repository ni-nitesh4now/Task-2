import React, { useState } from "react";
import "./css/tnf.css";

const TnF = ({ questionData }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questionData[currentQuestionIndex];

  const handleOptionChange = (questionId, value) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const checkAnswer = () => {
    const selectedOption = selectedAnswers[currentQuestion.id];
    const correctAnswer = currentQuestion.correctOption;

    setIsCorrect(selectedOption === correctAnswer);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowFeedback(false);
    setIsCorrect(false);
  };

  return (
    <div className="true-false">
      {questionData.map(
        (question, index) =>
          index === currentQuestionIndex && (
            <div key={question.id} className="question-container">
              <p className="question-text">{question.question}</p>
              <div className="options-container">
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value="true"
                    checked={selectedAnswers[question.id] === "true"}
                    onChange={() => handleOptionChange(question.id, "true")}
                    disabled={showFeedback}
                  />
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    name={`question_${question.id}`}
                    value="false"
                    checked={selectedAnswers[question.id] === "false"}
                    onChange={() => handleOptionChange(question.id, "false")}
                    disabled={showFeedback}
                  />
                  False
                </label>
              </div>
              {showFeedback && (
                <p
                  className={
                    isCorrect ? "feedback correct" : "feedback incorrect"
                  }
                >
                  {isCorrect ? "Correct!" : "Incorrect. Try again."}
                </p>
              )}
              {!showFeedback && (
                <button
                  className="check-button"
                  onClick={checkAnswer}
                  disabled={!selectedAnswers[question.id]}
                >
                  Check Answer
                </button>
              )}
              {showFeedback && (
                <button className="next-button" onClick={handleNextQuestion}>
                  Next Question
                </button>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default TnF;
