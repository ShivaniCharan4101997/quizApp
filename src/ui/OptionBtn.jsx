import React from "react";
import { QuizContext } from "../context/QuizProvider";

const OptionBtn = ({
  option,
  index,
  selectedOption,
  setSelectedOption,
  isSubmitted,
  correctAnswer,
}) => {
  const isSelected = selectedOption === option;
  const isCorrect = option === correctAnswer;

  let borderStyle = "border-transparent";

  if (isSubmitted) {
    if (isCorrect) {
      borderStyle = "border-green-500 bg-green-100";
    } else if (isSelected && !isCorrect) {
      borderStyle = "border-red-500 bg-red-100";
    }
  } else if (isSelected) {
    borderStyle = "border-purple-500";
  }

  return (
    <button
      onClick={() => setSelectedOption(option)}
      disabled={isSubmitted}
      className={`
        w-full
        flex items-center gap-4 md:gap-6
        p-4 md:p-6
        mb-3 md:mb-4
        bg-[var(--tabBgColor)]
        text-[var(--primaryColor)]
        rounded-xl md:rounded-2xl
        shadow-md
        transition-all duration-200
        hover:scale-[1.02]
        hover:shadow-lg
        hover:border-purple-500
        border-2 border-transparent
        ${borderStyle}
      `}
    >
      {/* LETTER BOX */}
      <div
        className="
          w-10 h-10 md:w-14 md:h-14
          flex items-center justify-center
          rounded-lg
          bg-[var(--bgColor)]
        "
      >
        <span className="font-bold text-lg md:text-2xl">
          {String.fromCharCode(65 + index)}
        </span>
      </div>

      {/* OPTION TEXT */}
      <span className="text-base md:text-3xl font-bold text-left">
        {option}
      </span>
    </button>
  );
};

export default OptionBtn;
