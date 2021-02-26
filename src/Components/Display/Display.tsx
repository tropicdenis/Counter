import React from 'react';
import s from './Display.module.css'

type displayPropsType = {
    clickCounter: number
}

function Display(props: displayPropsType) {
  return (
      <div className={props.clickCounter === 5 ? s.displayRed : s.displayBlack}>
          {props.clickCounter}
      </div>

  );
}


export default Display;
