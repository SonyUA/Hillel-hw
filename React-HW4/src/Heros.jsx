import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Heros = () => {
    const [users, setUsers] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        const addAllUsers = async () => {
            setIsLoad(true);
            const response = await fetch("https://swapi.dev/api/people");
            const data = await response.json();
            setUsers(data.results);
            setIsLoad(false);
        };
        addAllUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {isLoad && <h1>...Loading</h1>}
            <div className='heros-box'>
                {users &&
                    users.map((el, i) => (
                        <div className='chooseHero' key={el.url}>
                            <h3>{el.name}</h3>
                            <div className='img-chooseHero-box'>
                                <img className='img-chooseHero' src={`https://starwars-visualguide.com/assets/img/characters/${i + 1}.jpg`} alt='chooseHero' />
                            </div>
                            <Link className='link-chooseHero' to={`/Heros/${i + 1}`}>
                                Info
                            </Link>
                        </div>
                    ))}
                <Link className='link-chooseHero' to='/'>
                    Go Home
                </Link>
            </div>
        </>
    );
};
export default Heros;
