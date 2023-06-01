import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Planet = () => {
    const { planetsId } = useParams();
    const [user, setUser] = useState({});
    const [isLoad, setIsLoad] = useState(true);

    useEffect(() => {
        const addUser = async () => {
            const response = await fetch(`https://swapi.dev/api/planets/${planetsId}`);
            const data = await response.json();
            setUser(data);
            setIsLoad(false);
        };
        addUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [planetsId]);
    return (
        <>
            {isLoad && <h1>...Loading</h1>}
            <div className='chooseHero'>
                <h3>{user.name}</h3>
                <div className='img-chooseHero-box'>
                    <img className='img-chooseHero' src={`https://starwars-visualguide.com/assets/img/planets/${planetsId}.jpg`} alt='Planet' />
                </div>
                <p>Diameter: {user.diameter}</p>
                <p>Climate: {user.climate}</p>
                <p>Gravity: {user.gravity}</p>
                <p>Population: {user.population}</p>
                <Link className='link-chooseHero' to='/Planets'>
                    Go Back
                </Link>
            </div>
        </>
    );
};
export default Planet;
