import { atom } from "recoil";

export const workValue = atom({
  key: 'workValue',
  default: 45
});

export const restValue = atom({
  key: 'restValue',
  default: 25
});

export const exercisesValue = atom({
  key: 'exercisesValue',
  default: 5
});

export const roundsValue = atom({
  key: 'roundsValue',
  default: 5
});

export const roundRestValue = atom({
  key: 'roundRestValue',
  default: 25
});