import Header from "./components/Header";
import Hero from "./components/Hero";
import { Routes, Route } from "react-router-dom";
import Quiz from "./components/Quiz";
import QuizProvider from "./context/QuizProvider";

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--bgColor)] transition-all duration-500">
      <div
        className="
      min-h-screen
      bg-cover bg-no-repeat bg-center

      bg-[url('/assets/images/pattern-background-mobile-light.svg')]
      dark:bg-[url('/assets/images/pattern-background-mobile-dark.svg')]

      md:bg-[url('/assets/images/pattern-background-tablet-light.svg')]
      md:dark:bg-[url('/assets/images/pattern-background-tablet-dark.svg')]

      lg:bg-[url('/assets/images/pattern-background-desktop-light.svg')]
      lg:dark:bg-[url('/assets/images/pattern-background-desktop-dark.svg')]
    "
      >
        <QuizProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/quiz/:subject" element={<Quiz />} />
          </Routes>
        </QuizProvider>
      </div>
    </div>
  );
};

export default App;
