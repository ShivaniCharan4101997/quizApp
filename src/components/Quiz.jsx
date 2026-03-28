import QuizOptions from "./QuizOptions";
import QuizQuestion from "./QuizQuestion";

const Quiz = () => {
  return (
    <div className="px-5 py-8 md:p-15 md:grid grid-cols-2 gap-10 items-start">
      <QuizQuestion />
      <QuizOptions />
    </div>
  );
};

export default Quiz;
