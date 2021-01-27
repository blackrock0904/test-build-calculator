import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAnswerFromInput } from '../redux/actions';

export const Input = ({step, inputIndex}) => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.data[step][inputIndex]);
  const inputHandler = (e) => {
    const validate = e.target.value.replace(/\D/gi, '');
    dispatch(setAnswerFromInput(step, inputIndex, validate));
  }
  return <input style={{height: '20px'}} value={value} onChange={inputHandler} />  
}
