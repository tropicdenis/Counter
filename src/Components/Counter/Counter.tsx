import React from 'react';
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
import s from './Counter.module.css'

type CounterPropsType = {
    incClickCounter: () => void
    resetClickCounter: () => void
    clickCounter: number
    startValue: number;
    maxValue: number
};

function Counter(props: CounterPropsType) {
    return (
        <div className={s.counter}>
            <Display clickCounter={props.clickCounter}/>
            <Buttons incClickCounter={props.incClickCounter}
                     resetClickCounter={props.resetClickCounter}
                     clickCounter={props.clickCounter}
                     startValue={props.startValue}
                     maxValue={props.maxValue}

            />
        </div>

    );
}


export default Counter;
