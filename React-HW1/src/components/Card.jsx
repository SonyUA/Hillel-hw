import BtnCards from "./BtnCards";
import ImgCard from "./ImgCard";
const Card = () => {
    const styleCard = {
        dysplay: "flex",
        width: "500px",
        margin: " 0 auto",
        position: "relative",
    };
    return (
        <div style={styleCard}>
            <ImgCard />
            <BtnCards />
        </div>
    );
};

export default Card;
