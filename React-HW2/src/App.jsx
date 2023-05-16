import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
const App = () => {
    const [count, setCount] = useState(0);
    const HandleClickPlus = () => {
        setCount(count + 1);
    };
    const HandleClickMinus = () => {
        setCount(count - 1);
    };
    return (
        <div className='counterBox'>
            <h1 className='title'>Counter</h1>
            <p className='text'>{count}</p>
            <Button onClick={HandleClickMinus}>-</Button>
            <Button onClick={HandleClickPlus}>+</Button>
        </div>
    );
};

export default App;
