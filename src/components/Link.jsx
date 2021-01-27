import React from 'react';
import { useDispatch } from 'react-redux';
import { setAnswer } from '../redux/actions';

export const Link = ({ text, value, step }) => {
  const dispatch = useDispatch();
  const linkHandler = (e) => {
    e.preventDefault();
    dispatch(setAnswer(step, value));
  }
  return (
      <a style={{color: 'green'}} href="!" onClick={linkHandler}>
        {text}
      </a>
  );
}
