import { makeAutoObservable } from "mobx";

export type State = "home" | "in_game" | "result";
export type Difficulty = "easy" | "medium" | "hard";

export const MAX_ROOM = 10 as const;
export const WORDS_IN_ROOM = 4 as const;

class Store {
  private _state: State = "home";
  private _difficulty: Difficulty | null = null;
  private _errors = 0;

  get state() { return this._state; }
  get difficulty() { return this._difficulty; }

  constructor() { makeAutoObservable(this); }

  start = (diff: Difficulty) => { this._state = "in_game"; this._difficulty = diff; };
  close = () => { this._state = "home"; };
  finish = (errors: number) => { this._state = "result"; this._errors = errors; };
}

export const quizModel = new Store();