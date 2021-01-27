import { NEXT, RESET, SET_ANSWER, SET_ANSWER_FROM_INPUT } from './actionTypes.js';

export const nextStep = () => ({type: NEXT});
export const reset = () => ({type: RESET});
export const setAnswer = (step, value) => ({type: SET_ANSWER, payload: {step, value}});
export const setAnswerFromInput = (step, inputIndex, value) => ({type: SET_ANSWER_FROM_INPUT, payload:{step, inputIndex, value}})
