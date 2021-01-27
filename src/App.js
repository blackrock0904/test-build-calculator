import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './components/Button';
import { nextStep, reset } from './redux/actions';
import { Step } from './components/Step';
import { Result } from './components/Result';
const styles = {
  container: {
    width: '300px',
    border: '1px solid black'
  },
  h1: {
    fontSize: '1rem',
    textAlign: 'center'
  },
  h2: {
    fontSize: '.9rem',
    textAlign: 'center',
    color: 'gray'
  },
  center: {
    margin: '20px',
    display: 'flex',
    justifyContent: 'center'
  }
}

const App = () => {
  const [ result, setResult] = useState(null);
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  const resultButtonHandler = async () => {
    const response = await fetch(`https://data.techart.ru/lab/json/?building=${store.data[0]}&height=${store.data[1][0]}&material=${store.data[2]}&sizex=${store.data[3][0]}&sizey=${store.data[3][1]}`);
    const res = await response.json();    
    setResult(res);
  }
  const newButtonHandler = () => {
    dispatch(reset());
    setResult(null);    
  }

  return (
    <React.Fragment>
        <div style={styles.container}>
          <h1 style={styles.h1}>Калькулятор цены конструкций</h1>
          <h2 style={styles.h2}>
            {!result && `Шаг ${store.step + 1}`}
            {result && `Результат рассчета`}
          </h2>
          {!result && <Step/>}
          {result && <Result response={result}/>}
        </div>   

        <div style={styles.center}>
          {!result && 
            <React.Fragment>
              <Button text="Отмена" onClick={() => dispatch(reset())}/>
              {store.step < 3 && <Button text="Дальше" onClick={() => dispatch(nextStep())}/>}
              {store.step === 3 && <Button text="Рассчитать" onClick={ resultButtonHandler }/>}
            </React.Fragment>
          }
          {result && <Button text="Новый рассчет" onClick={newButtonHandler}/>}          
        </div>
        
    </React.Fragment>
  );
}

export default App;
