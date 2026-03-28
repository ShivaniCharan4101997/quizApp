import data from "../data.json";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { QuizContext } from "./QuizContext";

const getQuizSlug = (title) => {
  if (title.toLowerCase() === "javascript") {
    return "js";
  }

  return title.toLowerCase();
  ``;
};

const QuizProvider = ({ children }) => {
  const location = useLocation();
  const [quizIndex, setQuizIndex] = React.useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const currentQuiz = data[quizIndex];
  const [darkMode, setDarkMode] = React.useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

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

  React.useEffect(() => {
    const [quizRoute, subjectSlug] = location.pathname.split("/");

    if (quizRoute !== "quiz" || !subjectSlug) {
      return;
    }

    const matchedIndex = data.findIndex(
      (quiz) => getQuizSlug(quiz.title) === subjectSlug.toLowerCase(),
    );

    if (matchedIndex === -1 || matchedIndex === quizIndex) {
      return;
    }

    setQuizIndex(matchedIndex);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
  }, [location.pathname, quizIndex]);

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
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
        correctAnswer:
          currentQuiz.questions[currentQuestionIndex]?.answer ?? "",
        isQuizCompleted: currentQuestionIndex >= currentQuiz.questions.length,
        restartQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
