import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    clickCounter: number
}

function Display(props: DisplayPropsType) {
  return (
      <div className={props.clickCounter === 5 ? s.displayRed : s.displayBlack}>
          {props.clickCounter}
      </div>

  );
}


export default Display;
