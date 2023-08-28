import React, { useState } from "react";
import "./css/mcq.css";

const MCQQuiz = ({ mcqQuestions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionChange = (questionId, value) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const checkAnswer = () => {
    const selectedOption =
      selectedAnswers[mcqQuestions[currentQuestionIndex].id];
    const correctAnswer = mcqQuestions[currentQuestionIndex].correctOption;

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
    <div className="mcq-quiz">
      {mcqQuestions.map(
        (question, index) =>
          index === currentQuestionIndex && (
            <div key={question.id} className="question-container">
              <p className="question-text">{question.question}</p>
              <div className="options-container">
                {question.options.map((option) => (
                  <label key={option} className="option-label">
                    <input
                      type="radio"
                      name={`question_${question.id}`}
                      value={option}
                      checked={selectedAnswers[question.id] === option}
                      onChange={() => handleOptionChange(question.id, option)}
                      disabled={showFeedback}
                    />
                    {option}
                  </label>
                ))}
              </div>
              {showFeedback && (
                <p
                  className={
                    isCorrect ? "feedback correct" : "feedback incorrect"
                  }
                >
                  {isCorrect ? "Correct!" : "Incorrect. "}
                </p>
              )}
              {!showFeedback && (
                <button
                  onClick={checkAnswer}
                  disabled={!selectedAnswers[question.id]}
                >
                  Check Answer
                </button>
              )}
              {showFeedback && (
                <button onClick={handleNextQuestion}>Next Question</button>
              )}
            </div>
          )
      )}
    </div>
  );
};

export default MCQQuiz;
