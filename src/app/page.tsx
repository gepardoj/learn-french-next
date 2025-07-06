"use client";
import { availableQuizes, QuizEntity, quizModel } from "@/features/quiz/model/QuizModel";
import Quiz from "@/features/quiz/ui/Quiz";
import QuizResult from "@/features/quiz/ui/QuizResult";
import ButtonCard from "@/shared/ui/ButtonCard";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const Home = observer(() => {
  const [selectedQuiz, setSelectedQuiz] = useState<QuizEntity | null>(null);
  if (quizModel.state === "in_quiz" && selectedQuiz) return <Quiz quiz={selectedQuiz} />;
  if (quizModel.state === "result") return <QuizResult />;
  return (
    <>
      <h1 className="text-3xl text-center my-3">Learn French</h1>
      <section className="m-2 flex flex-1 overflow-y-auto flex-col items-center gap-3">
        {availableQuizes.map(quiz =>
          <ButtonCard key={quiz.name} onClick={() => {
            setSelectedQuiz(quiz);
            quizModel.start("easy");
          }} src={quiz.img} alt={quiz.name} size="large" />

        )}
      </section>
    </>
  );
});

export default Home;