import { fantasy } from "@/features/quiz/model/fantasy.words";
import { general } from "@/features/quiz/model/general.words";
import { savanna } from "@/features/quiz/model/savanna.words";
import { makeAutoObservable } from "mobx";

export type State = "home" | "in_quiz" | "result";
export type Difficulty = "easy" | "medium" | "hard";

export const MAX_ROOM = 10 as const;
export const WORDS_IN_ROOM = 4 as const;

export type Word = [string, string];

export type QuizEntity = {
  name: string;
  img: string;
  words: Word[];
};

class Store {
  private _state: State = "home";
  private _difficulty: Difficulty | null = null;
  private _errors = 0;

  get state() { return this._state; }
  get difficulty() { return this._difficulty; }
  get errors() { return this._errors; }

  constructor() { makeAutoObservable(this); }

  start = (diff: Difficulty) => { this._state = "in_quiz"; this._difficulty = diff; };
  close = () => { this._state = "home"; };
  finish = (errors: number) => { this._state = "result"; this._errors = errors; };
}

export const availableQuizes = [general, savanna, fantasy,];

export const quizModel = new Store();