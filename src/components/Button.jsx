import React from 'react';
const styles = {
  button: {
    padding: '5px 10px',
    margin: '0 2px'
  }
};

export const Button = ({text, onClick}) => {
  return <button style={styles.button} onClick={onClick}>{text}</button>;
}


