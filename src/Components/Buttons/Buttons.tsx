import React from 'react';
import s from './Buttons.module.css'

type buttonsPropsType = {
    changeClickCounter: () => void
    resetClickCounter: () => void
    clickCounter: number
}

function Buttons(props: buttonsPropsType) {
    return (
        <div className={s.buttons}>
            <button className={s.button1} onClick={props.changeClickCounter}
                    disabled={props.clickCounter === 5}>inc
            </button>
            <button className={s.button1} onClick={props.resetClickCounter}
                    disabled={props.clickCounter === 0}
            >reset
            </button>
        </div>

    );
}


export default Buttons;
