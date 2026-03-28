import React from "react";
import OptionBtn from "../ui/OptionBtn";
import { QuizContext } from "../context/QuizProvider";
import PrimaryBtn from "../ui/PrimaryBtn";

const QuizOptions = () => {
  const {
    questions,
    currentQuestionIndex,
    isSubmitted,
    setIsSubmitted,
    selectedOption,
    setSelectedOption,
    setCurrentQuestionIndex,
    score,
    setScore,
  } = React.useContext(QuizContext);

  const currentQuestion = questions[currentQuestionIndex];

  function handleSubmit() {
    if (!selectedOption) return;

    setIsSubmitted(true);

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    //  update progress here
    setProgress((prev) => prev + 1);
  }

  function handleNext() {
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  }

  return (
    <div>
      {/* OPTIONS */}
      {currentQuestion.options.map((option, index) => (
        <OptionBtn
          key={index}
          option={option}
          index={index}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          isSubmitted={isSubmitted}
          correctAnswer={currentQuestion.answer}
        />
      ))}

      {/* BUTTON */}
      <PrimaryBtn
        onClick={isSubmitted ? handleNext : handleSubmit}
        disabled={!selectedOption && !isSubmitted}
      >
        {isSubmitted ? "Next Question" : "Submit Answer"}
      </PrimaryBtn>
    </div>
  );
};

export default QuizOptions;
