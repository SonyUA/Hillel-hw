/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Header } from "./Header/Header";
import { useEffect } from "react";

const App = () => {
    let [allUsers, setAllUsers] = useState([]);
    let [addAllUsers, setAddAllUsers] = useState(false);
    let [textValue, setTextValue] = useState("");
    let [user, setUser] = useState([]);
    // let [addUser, setAdduser] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            try {
                if (response.ok) {
                    setAllUsers(data);
                    console.log(allUsers);
                }
            } catch (response) {
                console.log(response.message);
            }
        };
        getUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addUsers = () => {
        setAddAllUsers(!addAllUsers);
    };

    const inputValue = (e) => {
        setTextValue(e.target.value);
    };
    const addOneUser = () => {
        let num = Number(textValue);
        if (num > 0) {
            getUser(num);
            //setAdduser(!addUser);
        }
    };

    const getUser = async (value) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${value}`);
            if (response.ok) {
                const data = await response.json();
                setUser([data]);
                console.log(user);
            }
        } catch (response) {
            console.log(response.message);
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <div className='usersBox'>
            <Header getAllUsers={addUsers} inputValue={inputValue} addOneUser={addOneUser} />
            {
                <div className='usersList'>
                    {addAllUsers &&
                        allUsers.map((user) => (
                            <p key={user.id}>
                                {user.name} : ID - {user.id}
                            </p>
                        ))}
                    {user.map((user) => (
                        <p key={user.id}>
                            Name:{user.name}
                            <br />
                            tel:{user.phone}
                            <br />
                            email:{user.email}
                            <br />
                            website:{user.website}
                        </p>
                    ))}
                </div>
            }
        </div>
    );
};

export default App;
