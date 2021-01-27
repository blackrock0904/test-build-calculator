import React from 'react';
const styles = {
  result: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    backgroundColor: 'lightgray',
    textAlign: 'center',
    padding: '10px 0',
    color: 'blue'
  },
  error: { 
    color: 'red', 
    textAlign: 'center',
    padding: '10px' 
  },
  success: { 
    color: 'blue', 
    textAlign: 'center',
    padding: '10px' 
  },
}
export const Result = ({ response }) => {

  return (
    <div>
      {response.result === 'ok' &&
        <React.Fragment>
          <div style={styles.title}>Успешно</div>
          <div style={styles.success}>{response.message}</div>
        </React.Fragment> 
      }
      {response.result === 'error' && 
      <React.Fragment>
        <div style={styles.title}>Ошибка</div>
        <div style={styles.error}>{response.message}</div>
      </React.Fragment>
      }
    </div>
  );
}
