import React from "react";
import { QuizContext } from "../context/QuizContext";
import ProgressBar from "../ui/ProgressBar";

const QuizQuestion = () => {
  const { questions, currentQuestionIndex } = React.useContext(QuizContext);
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col justify-between h-full gap-10 md:gap-16">
      {/* TOP CONTENT */}
      <div className="space-y-6 md:space-y-8 max-w-2xl">
        {/* Question Number */}
        <p className="italic text-[var(--secondaryColor)] text-sm md:text-lg">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>

        {/* Question Text */}
        <h1
          className="
          text-[var(--primaryColor)] 
          font-bold 
          leading-tight 
          text-xl 
          md:text-3xl 
          lg:text-4xl
        "
        >
          {currentQuestion.question}
        </h1>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full md:max-w-2xl">
        <ProgressBar
          current={currentQuestionIndex + 1}
          total={questions.length}
        />
      </div>
    </div>
  );
};

export default QuizQuestion;
