
import React from 'react';
import { QuizContext } from '../context/QuizProvider';
import QuizOptions from "./QuizOptions";
import QuizQuestion from "./QuizQuestion";
import QuizCompleted from "./QuizCompleted";

const Quiz = () => {
  const { questions, currentQuestionIndex } = React.useContext(QuizContext);
  const isComplete = currentQuestionIndex >= questions.length;

  return (
    <div className="px-5 py-8 md:p-15 md:grid grid-cols-2 gap-10 items-start">
      {isComplete ? (
        <QuizCompleted />
      ) : (
        <>
          <QuizQuestion />
          <QuizOptions />
        </>
      )}
    </div>
  );
};
export default Quiz;
