import React, { useState } from "react";
import Dropdown from "./subcomponents/dropdown";
import "./css/question.css";
import TnF from "./subcomponents/tnf";
import ShortAnswerComponent from "./subcomponents/shortans";
import {
  tnfQuestions,
  mcqQuestions,
  short,
  fill,
  arrange,
} from "./subcomponents/data/questionData";
import FillInTheBlanksComponent from "./subcomponents/fillin";
import MCQQuiz from "./subcomponents/mcq";
import Arrange from "./subcomponents/arrange";

const Question = () => {
  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [selectedValue3, setSelectedValue3] = useState(null);
  const [currentShortQuestionIndex, setCurrentShortQuestionIndex] = useState(0);
  const [currentFillQuestionIndex, setCurrentFillQuestionIndex] = useState(0);

  const handleSelect1 = (value) => {
    setSelectedValue1(value);
  };

  const handleSelect2 = (value) => {
    setSelectedValue2(value);
  };

  const handleSelect3 = (value) => {
    setSelectedValue3(value);
  };

  const dropdownOptions1 = ["Fun", "Easy", "Medium", "Tough", "Expert"];
  const dropdownOptions2 = [
    "Multiple choice",
    "Arrange ordering",
    "True or false",
    "Fill in the blanks",
    "Short answer",
  ];
  const dropdownOptions3 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  const filteredTnfQuestions = selectedValue1
    ? tnfQuestions.filter((question) => question.difficulty === selectedValue1)
    : tnfQuestions;
  const filteredMcqQuestions = selectedValue1
    ? mcqQuestions.filter((question) => question.difficulty === selectedValue1)
    : mcqQuestions;
  const filteredShortQuestions = selectedValue1
    ? short.filter((question) => question.type === selectedValue1)
    : short;
  const filteredFillQuestions = selectedValue1
    ? fill.filter((question) => question.type === selectedValue1)
    : fill;

  const filteredMcqQuestionsByScore = selectedValue3
    ? filteredMcqQuestions.filter(
        (question) => question.score === parseInt(selectedValue3)
      )
    : filteredMcqQuestions;
  const filteredTnfQuestionsByScore = selectedValue3
    ? filteredTnfQuestions.filter(
        (question) => question.score === parseInt(selectedValue3)
      )
    : filteredTnfQuestions;
  const filteredShortQuestionsByScore = selectedValue3
    ? filteredShortQuestions.filter(
        (question) => question.score === parseInt(selectedValue3)
      )
    : filteredShortQuestions;
  const filteredFillQuestionsByScore = selectedValue3
    ? filteredFillQuestions.filter(
        (question) => question.score === parseInt(selectedValue3)
      )
    : filteredFillQuestions;

  const handleShortNextQuestion = () => {
    if (currentShortQuestionIndex < filteredShortQuestionsByScore.length - 1) {
      setCurrentShortQuestionIndex(currentShortQuestionIndex + 1);
    } else {
      alert("Short Answer Quiz Completed.");
    }
  };
  return (
    <div className="app-container">
      <div className="dropdown-container">
        <Dropdown
          title="Question level "
          options={dropdownOptions1}
          onSelect={handleSelect1}
        />
        <Dropdown
          title="Question type"
          options={dropdownOptions2}
          onSelect={handleSelect2}
        />
        <Dropdown
          title="Assign marks"
          options={dropdownOptions3}
          onSelect={handleSelect3}
        />
      </div>
      <div className="question-container">
        {selectedValue2 === dropdownOptions2[0] && (
          <div className="question-box">
            <h1>Multiple Choice Questions</h1>
            {filteredMcqQuestionsByScore.length > 0 ? (
              <MCQQuiz mcqQuestions={filteredMcqQuestionsByScore} />
            ) : (
              <p>No match Found</p>
            )}
          </div>
        )}
        {selectedValue2 === dropdownOptions2[1] && (
          <div className="question-box">
            <h1>Arrange the Sequence</h1>
            {arrange.length > 0 ? (
              <Arrange questions={arrange} />
            ) : (
              <p>No match Found</p>
            )}
          </div>
        )}
        {selectedValue2 === dropdownOptions2[2] && (
          <div className="question-box">
            <h1>True or False</h1>
            {filteredTnfQuestionsByScore.length > 0 ? (
              <TnF questionData={filteredTnfQuestionsByScore} />
            ) : (
              <p>No match Found</p>
            )}
          </div>
        )}
        {selectedValue2 === dropdownOptions2[3] && (
          <div className="question-box">
            <h1>Fill in the Blanks</h1>
            {filteredFillQuestionsByScore.length > 0 ? (
              <FillInTheBlanksComponent
                questionData={filteredFillQuestionsByScore}
              />
            ) : (
              <p>No match Found</p>
            )}
          </div>
        )}
        {selectedValue2 === dropdownOptions2[4] && (
          <div className="question-box">
            <h1>Short Answer</h1>
            {filteredShortQuestionsByScore.length > 0 ? (
              <ShortAnswerComponent
                question={
                  filteredShortQuestionsByScore[currentShortQuestionIndex]
                    .question
                }
                correctAnswer={
                  filteredShortQuestionsByScore[currentShortQuestionIndex]
                    .correctAnswer
                }
              />
            ) : (
              <p>No match Found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
