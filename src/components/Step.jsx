import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from './Link';
import { Input } from './Input';
const styles = {
  question: {
    backgroundColor: 'lightgray',
    textAlign: 'center',
    padding: '10px 0',
    color: 'blue'
  },
  answers: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px'
  } 
}

export const Step = () => {
  const store = useSelector(store => store);
    return (
    <div >
      <div style={styles.question}>
        {store.questions[store.step]}
      </div>
      <div style={styles.answers}>
        {store.answers[store.step].map((el, i) => {
          return (el) ? <div style={{width: '100%'}}><li><Link step={store.step} text={el} value={i} /></li></div> : <Input step={store.step} inputIndex={i}/>          
        })  
        }
      </div>
    </div>
  );
}

