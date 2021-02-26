import React from 'react';
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
import s from './Counter.module.css'

type CounterPropsType = {
    changeClickCounter: () => void
    resetClickCounter: () => void
    clickCounter: number
};

function Counter(props: CounterPropsType) {
    return (
        <div className={s.counter}>
            <Display clickCounter={props.clickCounter}/>
            <Buttons changeClickCounter={props.changeClickCounter}
                     resetClickCounter={props.resetClickCounter}
                     clickCounter={props.clickCounter}
            />
        </div>

    );
}


export default Counter;
