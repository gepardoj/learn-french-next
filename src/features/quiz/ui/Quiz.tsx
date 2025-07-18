"use client";
import { ANIMATION_TIME_MS } from '@/app/globals';
import { MAX_ROOM, QuizEntity, quizModel, WORDS_IN_ROOM } from '@/features/quiz/model/QuizModel';
import BottomSlide from '@/shared/ui/BottomSlide';
import { Button } from '@/shared/ui/Button';
import { ButtonIcon } from '@/shared/ui/ButtonIcon';
import CloseIcon from '@/shared/ui/icons/CloseIcon';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type ConfirmButtonState = "check" | "error" | "success";

type QuizProps = {
  quiz: QuizEntity;
};

export default function Quiz(props: QuizProps) {
  const { quiz } = props;

  const [room, setRoom] = useState(0);
  // let percentAnswered = 5;
  const [errors, setErrors] = useState(0);
  const [chosenVariant, setChosenVariant] = useState<number | null>(null);
  const [questionState, setQuestionState] = useState<ConfirmButtonState>("check");
  const [variants, setVariants] = useState<string[][]>([]);

  const sortedWords = useMemo(() => quiz.words.toSorted(() => (Math.random() > 0.5 ? 1 : -1)), [quiz.words]);

  const pageRef = useRef<HTMLElement | null>(null);

  const close = () => {
    quizModel.close();
    setChosenVariant(null);
    setRoom(0);
  };
  const continueQuiz = () => {
    questionState === "check" ? check() : next();
  };
  const chooseVariant = (i: number) => {
    setChosenVariant(i);
  };
  const check = () => {
    if (chosenVariant === null) throw new Error(`Chosen variant cannot be null`);
    if (questionFr(room) === variants[chosenVariant][0]) {
      setQuestionState("success");
    } else {
      setQuestionState("error");
      setErrors(er => er + 1);
    }
    // percentAnswered = ((room + 1) / MAX_ROOM) * 100;
  };
  const next = () => {
    setRoom(r => r + 1);
    setChosenVariant(null);
    setQuestionState("check");
  };
  const questionFr = (i: number) => sortedWords[i * WORDS_IN_ROOM][0];
  const answerFr = (i: number) => sortedWords[i * WORDS_IN_ROOM][1];
  const variant = (i: number) => variants[i][1];
  const sortFor4Variants = (sortedWords: string[][], i: number) =>
    sortedWords
      .slice(i * WORDS_IN_ROOM, (i + 1) * WORDS_IN_ROOM)
      .toSorted(() => (Math.random() > 0.5 ? 1 : -1));



  console.log(`Quizz render`);

  useEffect(() => {
    if (room >= MAX_ROOM) {
      quizModel.finish(errors);
      return;
    }
    setVariants(sortFor4Variants(sortedWords, room));
    pageRef.current?.classList.add("animate-slide-right");
    setTimeout(() => {
      pageRef.current?.classList.remove("animate-slide-right");
    }, ANIMATION_TIME_MS);
  }, [room]);

  return (
    <>
      <div className="m-4 flex gap-6 items-center">
        <ButtonIcon onClick={close} Icon={CloseIcon} alt="Close" />
        {/* <ProgressBar percent={percentAnswered} /> */}
      </div>
      <section ref={pageRef} className="m-4 flex flex-1 mt-10 flex-col justify-center gap-3">
        <h2 className="text-3xl text-center">{questionFr(room)}</h2>
        {variants.map((_, i) =>
          <Button
            key={i}
            onClick={() => chooseVariant(i)}
            variant={chosenVariant === i ? "primary" : "default"}
            label={variant(i)}
          />)
        }
        {questionState === "error" && <BottomSlide variant='error' title='Wrong. The answer is...' body={answerFr(room)} />}
        <Button
          className="mt-auto"
          onClick={continueQuiz}
          variant={questionState === "success"
            ? "success"
            : questionState === "error"
              ? "error"
              : undefined}
          disabled={chosenVariant === null}
          label={questionState === "success"
            ? "Continue"
            : questionState === "error"
              ? "Got it"
              : "Check"}
        />
      </section>
    </>
  );
}
