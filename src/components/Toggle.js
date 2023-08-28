import React, { useState } from "react";

const CustomToggle = () => {
  const initialOptions = ["Day 1", "Day 2"];
  const [options, setOptions] = useState(initialOptions);
  const [activeOption, setActiveOption] = useState(initialOptions[0]);

  const handleToggle = (option) => {
    setActiveOption(option);
  };

  const handleAddOption = () => {
    const newOption = `Day ${options.length + 1}`;
    setOptions([...options, newOption]);
    setActiveOption(newOption);
  };

  return (
    <div className="custom-toggle">
      {options.map((option) => (
        <button
          key={option}
          className={`toggle-option ${activeOption === option ? "active" : ""}`}
          onClick={() => handleToggle(option)}
        >
          {option}
        </button>
      ))}
      <button className="toggle-option add-button" onClick={handleAddOption}>
        +
      </button>
    </div>
  );
};

export default CustomToggle;
