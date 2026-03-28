import { useNavigate } from "react-router-dom";
import React from "react";
import { QuizContext } from "../context/QuizProvider";
const BigButton = ({ subject }) => {
  const { setQuizIndex } = React.useContext(QuizContext);
  const navigate = useNavigate();

  function handleClick() {
    setQuizIndex(subject.id - 1);
    navigate(`/quiz/${subject.slug}`);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-[var(--tabBgColor)] text-[var(--primaryColor)] p-4 mb-2 md:p-[25px] rounded-xl md:rounded-3xl shadow-xl font-bold text-[35px] w-full md:mb-4"
    >
      <div className="flex items-center gap-8">
        <div
          style={{ backgroundColor: subject.iconBg }}
          className="w-12 h-12 md:w-16 md:h-16 rounded flex items-center justify-center relative"
        >
          <img
            src={subject.img}
            alt={subject.name}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>

        <span className="leading-[100%] text-[1.4rem] md:text-[2.8rem]">
          {subject.name}
        </span>
      </div>
    </button>
  );
};

export default BigButton;
