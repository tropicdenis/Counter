import s from "../Display/Display.module.css";
import React, {ChangeEvent} from "react";


type SetUpDisplayPropsType = {
    maxValue: number
    startValue: number
    maxValueChange: (maxValue: number)=> void
    startValueChange: (startValue: number)=> void

}

function SetUpDisplay(props: SetUpDisplayPropsType) {

    const maxValueChange=(e:ChangeEvent<HTMLInputElement>)=>{
    props.maxValueChange(e.currentTarget.valueAsNumber)
        console.log(e.currentTarget.value)
    }
    const startValueChange=(e:ChangeEvent<HTMLInputElement>)=>{
    props.startValueChange(e.currentTarget.valueAsNumber)
    }

    return (
        <div className={(props.startValue < 0) ||
        (props.maxValue === props.startValue) ? s.displayRed : s.displayBlack}>
            <input type={"number"}
                   name={"max value"}
                   defaultValue={props.maxValue}
                   onChange={maxValueChange} />
            <input type={"number"}
                   name={"start value"}
                   defaultValue={props.startValue}
                   onChange={startValueChange}/>
        </div>

    );
}


export default SetUpDisplay;