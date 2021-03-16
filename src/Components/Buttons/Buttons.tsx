import React from 'react';
import s from './ButtonsStyle.module.css'
import Button from "./Button";

type buttonsPropsType = {
    incClickCounter: () => void
    resetClickCounter: () => void
    clickCounter: number
    startValue: number;
    maxValue: number
}

function Buttons(props: buttonsPropsType) {
    return (
        <div className={s.buttons}>
            <Button onClick={props.incClickCounter}
                    disabler={props.clickCounter === props.maxValue}
                    buttonName={"inc"}
            />
            <Button onClick={props.resetClickCounter}
                    disabler={props.clickCounter === props.startValue}
                    buttonName={"reset"}
            />
        </div>
    );
}


export default Buttons;
