import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    clickCounter: number
    maxValue: number
    startValue: number
    onEdit: boolean
}

function Display(props: DisplayPropsType) {
    const errorMessage = "Incorrect Value";

    return <>
        {props.onEdit && props.startValue >= 0 && props.maxValue > props.startValue
            ? <div className={s.displayBlack}>enter values and press 'set'</div>
            : <div className={(props.clickCounter === props.maxValue ||
                props.startValue < 0 || props.maxValue <= props.startValue) ? s.displayRed : s.displayBlack}>
                {(props.startValue < 0 || props.maxValue <= props.startValue) ? errorMessage : props.clickCounter}
            </div>}
    </>
}


export default Display;
