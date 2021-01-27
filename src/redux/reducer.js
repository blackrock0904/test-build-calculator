import {
  NEXT,
  RESET,
  SET_ANSWER,
  SET_ANSWER_FROM_INPUT
} from './actionTypes';

import { initialState } from './initialState';
export const reducer = (state, action) => {
  switch (action.type) {
    case NEXT:
      return {
        ...state, step: ++state.step
      };
    case RESET:
      return {...initialState, step: 0};
    case SET_ANSWER:
      return {
        ...state, step: state.step + 1, data: state.data.map((el, i) => {
          return (i !== state.step) ? el : action.payload.value + 1;
        })
      }
      case SET_ANSWER_FROM_INPUT:
        return {
          ...state, data: state.data.map((el, i) => {
            if (i !== state.step) {
              return el;
            } else {
              return el.map((e, i) => {
                return (i !== action.payload.inputIndex) ? e : action.payload.value;
              });
            }
          })
        }
        default:
          return state;
  }
}
