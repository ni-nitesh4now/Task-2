import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Arrange = (props) => {
  const { questions } = props;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = questions[currentQuestionIndex];

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedOptions = Array.from(currentQuestion.options);
    const [movedOption] = updatedOptions.splice(result.source.index, 1);
    updatedOptions.splice(result.destination.index, 0, movedOption);

    const isCorrectSequence =
      JSON.stringify(updatedOptions.map((_, index) => index)) ===
      JSON.stringify(currentQuestion.correctSequence);

    if (isCorrectSequence) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("Congratulations! You have completed the quiz.");
      }
    } else {
      alert("Incorrect sequence.");
    }
  };
  return (
    <div className="quiz-container">
      <h2 className="question">Arrange Ordering</h2>
      <p className="question">{currentQuestion.question}</p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="options">
          {(provided) => (
            <div
              className="option-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {currentQuestion.options.map((option, index) => (
                <Draggable
                  key={index}
                  draggableId={String(index)}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      className={`option ${
                        snapshot.isDragging ? "dragging" : ""
                      } ${snapshot.draggingOver ? "dragging-over" : ""}`}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      {option}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder ? (
                <div className="placeholder">{provided.placeholder}</div>
              ) : null}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Arrange;
