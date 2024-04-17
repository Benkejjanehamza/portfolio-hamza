import corpo from "../../assets/img/corpo.png";
import cyberpunk from "../../assets/img/cyberpunk.png";
import synthwave from "../../assets/img/synthwave.png";
function Gallery(){

    return(
        <>
            <div className={"galery-container"}>
                <div className={"corpo"}>
                    <img src={corpo} />
                </div>
                <div className={"bot-container"}>
                    <div className={"cyberpunk"}>
                    <img src={cyberpunk}/>
                    </div>
                    <div className={"rectangle"}>
                        <h2 className={"name-inspiration"}>CYBERPUNK</h2>
                        <h2 className={"name-inspiration"}>SYNTHWAVE</h2>
                        <h2 className={"name-inspiration"}>CORPORATION</h2>
                    </div>
                    <div className={"synthwave"}>
                        <img src={synthwave}/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Gallery;