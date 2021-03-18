import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";
import SetUp from "./Components/SetUp/SetUp";


function App() {

    const [startValue, setStartValue]= useState(0)
    const [maxValue, setMaxValue]= useState(1)

    const [clickCounter, setClickCounter] = useState<number>(0);

    function incClickCounter() {
        if (clickCounter < maxValue) {
            const newClickCounter = clickCounter + 1
            setClickCounter(newClickCounter)
        }
    }
    function maxValueChange() {
        setMaxValue(maxValue)
    }
    function startValueChange() {
        setStartValue(startValue)
    }

    function resetClickCounter() {
            setClickCounter(0)
    }
    function setCounter () {
        setClickCounter(startValue)
    }

    return (
        <div className="App">
            <SetUp setClickCounter={setCounter}
                   clickCounter={clickCounter}
                   maxValue={maxValue}
                   startValue={startValue}
                   maxValueChange={maxValueChange}
                   startValueChange={startValueChange}
            />
            <Counter incClickCounter={incClickCounter}
                     resetClickCounter={resetClickCounter}
                     clickCounter={clickCounter}
                     maxValue={maxValue}
                     startValue={startValue}
            />
        </div>
    );
}

export default App;
