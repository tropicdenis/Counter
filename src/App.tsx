import React, {useState} from 'react';
import './App.css';
import Counter from "./Components/Counter/Counter";


function App() {
    const [clickCounter, setClickCounter] = useState<number>(0);

    function changeClickCounter() {
        if (clickCounter < 5) {
            const newClickCounter = clickCounter + 1
            setClickCounter(newClickCounter)
        }
    }

    function resetClickCounter() {
            setClickCounter(0)

    }

    return (
        <div className="App">
            <Counter changeClickCounter={changeClickCounter}
                     resetClickCounter={resetClickCounter}
                     clickCounter={clickCounter}
            />
        </div>
    );
}

export default App;
