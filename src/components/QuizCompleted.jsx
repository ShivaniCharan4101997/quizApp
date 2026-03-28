import React from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import PrimaryBtn from "../ui/PrimaryBtn";

const QuizCompleted = () => {
  const { score, questions, title, icon, iconBg, restartQuiz } =
    React.useContext(QuizContext);
  const navigate = useNavigate();

  function handlePlayAgain() {
    restartQuiz();
    navigate("/");
  }

  return (
    <>
      <div className="space-y-2 md:space-y-6">
        <p className="text-[var(--primaryColor)] text-[2.5rem] leading-[100%] md:text-[80px] font-thin">
          Quiz completed
        </p>
        <h1 className="text-[var(--primaryColor)] text-[2.5rem] leading-[100%] md:text-[80px] font-bold">
          You scored...
        </h1>
      </div>

      <div className="w-full">
        <div className="rounded-2xl md:rounded-3xl bg-[var(--tabBgColor)] p-8 md:p-12 shadow-xl text-center">
          <div className="flex items-center justify-center gap-4">
            <div
              style={{ backgroundColor: iconBg }}
              className="w-12 h-12 md:w-16 md:h-16 rounded flex items-center justify-center"
            >
              <img src={icon} alt={title} />
            </div>
            <h2 className="text-[var(--primaryColor)] font-bold text-2xl md:text-3xl">
              {title}
            </h2>
          </div>

          <p className="mt-8 text-[var(--primaryColor)] text-7xl md:text-9xl font-bold leading-none">
            {score}
          </p>
          <p className="mt-4 text-[var(--secondaryColor)] text-lg md:text-2xl">
            out of {questions.length}
          </p>
        </div>

        <PrimaryBtn onClick={handlePlayAgain}>Play Again</PrimaryBtn>
      </div>
    </>
  );
};

export default QuizCompleted;
