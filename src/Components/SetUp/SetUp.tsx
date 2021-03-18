import React from 'react';
import Buttons from "../Buttons/Buttons";
import Display from "../Display/Display";
import s from './SetUp.module.css'
import Button from "../Buttons/Button";
import SetUpDisplay from "../SetUpDisplay/SetUpDisplay";

type SetUpPropsType = {
    setClickCounter: () => void
    clickCounter: number
    maxValue: number
    startValue: number
    maxValueChange: () => void
    startValueChange: () => void
};

function SetUp(props: SetUpPropsType) {
    return (
        <div className={s.setup}>
            <SetUpDisplay
                maxValue={props.maxValue}
                startValue={props.startValue}
                maxValueChange={props.maxValueChange}
                startValueChange={props.startValueChange}
            />
            <div className={s.buttons}>
                <Button onClick={props.setClickCounter}
                        disabler={(props.startValue < 0) ||
                        (props.maxValue === props.startValue)}
                        buttonName={"set"}
                />
            </div>
        </div>

    );
}


export default SetUp;
