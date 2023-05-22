/* eslint-disable react/prop-types */

import { TextInput } from "./TextInput";
import { Button } from "./Button";
import "../app.css";

export const Header = (props) => {
    return (
        <div className='userHeader'>
            <h1> jsonplaceholder </h1>
            <div className='searcInputBox'>
                <TextInput inputValue={props.inputValue} />
                <Button onClick={props.addOneUser} text='Search user' />
            </div>
        </div>
    );
};
