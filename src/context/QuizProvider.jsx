import data from "../data.json";
import { createContext } from "react";
import React, { useState } from "react";
export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [quizIndex, setQuizIndex] = React.useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const currentQuiz = data[quizIndex];
  const [darkMode, setDarkMode] = React.useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  React.useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <QuizContext.Provider
      value={{
        title: currentQuiz.title,
        iconBg: currentQuiz.iconBg,
        icon: currentQuiz.icon,
        questions: currentQuiz.questions,
        setQuizIndex,
        darkMode,
        toggleTheme,
        quizIndex,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        selectedOption,
        setSelectedOption,
        isSubmitted,
        setIsSubmitted,
        score,
        setScore,
        correctAnswer: currentQuiz.questions[currentQuestionIndex].answer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
