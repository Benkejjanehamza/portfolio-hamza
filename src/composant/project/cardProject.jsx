
import social from "../../assets/img/card/social.png";
import commerce from "../../assets/img/card/commerce.png";
import space from "../../assets/img/card/space.png";


function CardProject(){
    return(
        <>
            <div className={"card-container"}>
                <div className={"social"}>
                    <h2 className={"card-name"}>SOCIAL NETWORK</h2>
                    <img className={"card-img"} src={social}/>
                </div>
                <div className={"commerce"}>
                    <h2 className={"card-name"}>E-COMMERCE</h2>
                    <img className={"card-img"} src={commerce}/>
                </div>
                <div className={"space"}>
                    <h2 className={"card-name"}>SPACE GALLERY</h2>
                    <img className={"card-img"} src={space}/>
                </div>
            </div>
        </>
    )
}

export default CardProject;