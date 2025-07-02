"use client";
import { quizModel } from "@/features/quiz/model/QuizModel";
import Quiz from "@/features/quiz/ui/Quiz";
import { Button } from "@/shared/ui/Button";
import { observer } from "mobx-react-lite";

const Home = observer(() => {
  if (quizModel.state === "in_quiz") return <Quiz />;
  if (quizModel.state === "result") return null;
  return (
    <section className="m-2 flex flex-[0.3] flex-col justify-center gap-3">
      <h1 className="text-3xl text-center">Learn French</h1>
      <Button onClick={() => quizModel.start("easy")} label="Easy. Match words" />
    </section>
  );
});

export default Home;