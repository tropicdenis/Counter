import s from "../Display/Display.module.css";
import React from "react";

type SetUpDisplayPropsType = {
    maxValue: number
    startValue: number
}

function SetUpDisplay(props: SetUpDisplayPropsType) {
    return (
        <div className={(props.startValue < 0) ||
        (props.maxValue === props.startValue) ? s.displayRed : s.displayBlack}>
            <input type={"number"} name={"max value"} defaultValue={props.maxValue} />
            <input type={"number"} name={"start value"} defaultValue={props.startValue}/>

        </div>

    );
}


export default SetUpDisplay;