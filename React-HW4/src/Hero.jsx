import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Hero = () => {
    const { HeroId } = useParams();
    const [user, setUser] = useState({});
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const addUser = async () => {
            const response = await fetch(`https://swapi.dev/api/people/${HeroId}`);
            const data = await response.json();
            setUser(data);
            setIsLoad(false);
            console.log(data);
        };
        addUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [HeroId]);
    return (
        <>
            {isLoad && <h1>...Loading</h1>}
            <div className='chooseHero'>
                <h3>{user.name}</h3>
                <div className='img-chooseHero-box'>
                    <img className='img-chooseHero' src={`https://starwars-visualguide.com/assets/img/characters/${HeroId}.jpg`} alt='Hero' />
                </div>
                <p>Gender: {user.gender}</p>
                <p>Birth: {user.birth_year}</p>
                <p>Eye_color: {user.eye_color}</p>
                <p>Height: {user.height}</p>
                <Link className='link-chooseHero' to='/Heros'>
                    Go Back
                </Link>
            </div>
        </>
    );
};

export default Hero;
