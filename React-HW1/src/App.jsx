import { useState } from "react";
import { Card } from "./components/card";
const App = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <Card />
        </>
    );
};

export default App;
