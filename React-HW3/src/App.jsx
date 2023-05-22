/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Header } from "./Header/Header";
import { useEffect } from "react";

const App = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [textValue, setTextValue] = useState("");
    const [user, setUser] = useState([]);
    const [addUser, setAdduser] = useState(false);
    const [dataFetched, setDataFetched] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                setAllUsers(data);
                setDataFetched(true);
                console.log(allUsers);
                if (!response.ok) {
                    throw new Error("Щось пішло нетак!");
                }
            } catch (e) {
                console.log("Message", e.message);
            }
        };
        if (!dataFetched) {
            getUsers();
        }
    }, [allUsers, dataFetched]);

    const getUser = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${textValue}`);
            const data = await response.json();
            setUser([data]);
            console.log(user);
            if (!response.ok) {
                throw new Error("Щось пішло нетак!!");
            }
        } catch (e) {
            console.log(e.message);
        }
    };

    const inputValue = (e) => {
        setTextValue(e.target.value);
        setAdduser(false);
        setError(false);
    };
    const addOneUser = () => {
        if (allUsers.length >= Number(textValue) && Number(textValue) >= 1) {
            setAdduser(!addUser);
            getUser();
        } else {
            setError(true);
        }
    };

    return (
        <div className='usersBox'>
            <Header inputValue={inputValue} addOneUser={addOneUser} />
            <div className='usersList'>
                <ol className='list'>
                    <h2>Users</h2>
                    {allUsers &&
                        allUsers.map((user) => (
                            <li className='listItem' key={user.id + user.name}>
                                {user.name}
                            </li>
                        ))}
                </ol>
                <div className='userItem'>
                    {error && <span>ID вказано невірно</span>}
                    {addUser &&
                        user.map((user) => (
                            <div key={user.id + user.length}>
                                <h2 key={user.id + user.name}>{user.name}</h2>
                                <p key={user.id}>
                                    Tel: {user.phone}
                                    <br />
                                    Email: {user.email}
                                    <br />
                                    Website: {user.website}
                                    <br />
                                    City: {user.address.city}
                                    <br />
                                    Username: {user.username}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default App;
