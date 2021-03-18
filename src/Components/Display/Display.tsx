import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    clickCounter: number
    maxValue: number
    startValue: number
}

function Display(props: DisplayPropsType) {
    const errorMessage = "Incorrect Value";
  return (
      <div className={props.clickCounter === props.maxValue ? s.displayRed : s.displayBlack}>
          {(props.startValue < 0 || props.maxValue <= props.startValue) ? errorMessage : props.clickCounter}
      </div>

  );
}


export default Display;
