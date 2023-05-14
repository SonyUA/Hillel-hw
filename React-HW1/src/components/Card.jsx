import { useState } from "react";
import { CardImg } from "./CardImg";
import { CardBtn } from "./CardBtn";
import { Cardcount } from "./CardCount";
import "../components/style.css";

export const Card = () => {
    const [count, Setcount] = useState(0);
    function AddOne() {
        Setcount(count + 1);
    }
    return (
        <div className='card'>
            <CardImg />
            <CardBtn func={AddOne} />
            <Cardcount num={count} />
        </div>
    );
};
