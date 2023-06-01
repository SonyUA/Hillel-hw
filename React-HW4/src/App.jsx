import { Routes, Route } from "react-router-dom";
import Hero from "./Hero";
import Home from "./Home";
import Heros from "./Heros";
import Planets from "./Planets";
import NotFound from "./NotFounds";
import Planet from "./Planet";
const App = () => {
    return (
        <div className='wrapper'>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/Heros/:HeroId' element={<Hero />}></Route>
                <Route path='/Heros' element={<Heros />}></Route>
                <Route path='/Planets' element={<Planets />}></Route>
                <Route path='/Planets/:planetsId' element={<Planet />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
        </div>
    );
};

export default App;
