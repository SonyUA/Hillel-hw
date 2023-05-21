/* eslint-disable react/prop-types */
import { AllUsersBtn } from "./AllUsersBtn";
import { TextInput } from "./TextInput";
import { UserBtn } from "./UserBtn";
import "../app.css";

export const Header = (props) => {
    return (
        <div className='userHeader'>
            <h1> jsonplaceholder </h1>
            <div className='searcInputBox'>
                <TextInput inputValue={props.inputValue} />
                <UserBtn addOneUser={props.addOneUser} />
            </div>
            <AllUsersBtn onClick={props.getAllUsers} />
        </div>
    );
};
