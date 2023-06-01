import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className='chooseHero'>
                <h3>Heros</h3>
                <div className='img-chooseHero-box'>
                    <img className='img-chooseHero' src='https://starwars-visualguide.com/assets/img/characters/1.jpg' alt='chooseHero' />
                </div>
                <Link className='link-chooseHero' to='/Heros'>
                    Info
                </Link>
            </div>

            <div className='chooseHero'>
                <h3>Planets</h3>
                <div className='img-chooseHero-box'>
                    <img className='img-chooseHero' src='https://starwars-visualguide.com/assets/img/planets/2.jpg' alt='chooseHero' />
                </div>
                <Link className='link-chooseHero' to='/Planets'>
                    Planets
                </Link>
            </div>
        </>
    );
};

export default Home;
