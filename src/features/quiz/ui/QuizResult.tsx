import { MAX_ROOM, quizModel } from '@/features/quiz/model/QuizModel';
import { Button } from '@/shared/ui/Button';
import { observer } from 'mobx-react-lite';
import React, { useMemo } from 'react';

const textByPercent = (percent: number) => {
  if (percent === 100) return "Are you even human?";
  if (percent > 90) return "Impressive!";
  if (percent > 70) return "Keep it up";
  if (percent > 50) return "Working...";
  return "So much to learn!";
};

const QuizResult = observer(() => {
  const percent = ((MAX_ROOM - quizModel.errors) / MAX_ROOM) * 100;

  return (
    <section className="m-4 flex flex-1 flex-col justify-center gap-3">
      <h1 className="text-3xl text-center">{textByPercent(percent)}</h1>
      <h2 className="text-xl text-center">You answered {percent}% correctly</h2>
      <Button onClick={quizModel.close} className="mt-auto" label="Finish" />
    </section>
  );
});

export default QuizResult;
