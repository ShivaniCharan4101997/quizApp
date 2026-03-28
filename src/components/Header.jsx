import React from "react";
import { QuizContext } from "../context/QuizProvider";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { questions } = React.useContext(QuizContext);
  const { darkMode, toggleTheme, icon, title, iconBg } =
    React.useContext(QuizContext);
  const location = useLocation();
  const isQuizPage = location.pathname.includes("/quiz");
  return (
    <div
      className={`flex items-center py-5 pr-5 md:pt-15 md:px-15
    ${isQuizPage ? "justify-between w-full m-4 md:m-0" : "ml-auto w-fit"}
  `}
    >
      {/* LEFT SIDE */}
      {isQuizPage && (
        <div className="flex items-center gap-4">
          <div
            style={{ backgroundColor: iconBg }}
            className="w-12 h-12 md:w-16 md:h-16 rounded flex items-center justify-center relative"
          >
            <img
              src={icon}
              alt={title}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <h1 className="text-[var(--primaryColor)] font-bold md:text-[35px] text-2xl">
            {title}
          </h1>
        </div>
      )}

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        {/* Sun */}
        <img
          src={
            darkMode
              ? "/assets/images/icon-sun-light.svg"
              : "/assets/images/icon-sun-dark.svg"
          }
          className="w-6"
          alt="sun"
        />

        {/* Toggle */}
        <div>
          <input
            type="checkbox"
            id="check"
            className="sr-only"
            checked={darkMode}
            onChange={toggleTheme}
          />

          <label
            htmlFor="check"
            className="w-14 h-7 rounded-full cursor-pointer relative flex items-center bg-[#a729f5]"
          >
            <span
              className={`absolute left-1 w-5 h-5 bg-white rounded-full transition-all duration-300 ${
                darkMode ? "translate-x-7" : ""
              }`}
            />
          </label>
        </div>

        {/* Moon */}
        <img
          src={
            darkMode
              ? "/assets/images/icon-moon-light.svg"
              : "/assets/images/icon-moon-dark.svg"
          }
          className="w-6"
          alt="moon"
        />
      </div>
    </div>
  );
};

export default Header;
