

import robot from "../../assets/img/robot.png";
import gradient from "../../assets/img/gradient.png";
function Stack(){

    return(
        <>
            <div className={"stack-container"}>
                <img className={"robot-img"} src={robot}/>
                <img className={"gradient-img"} src={gradient}/>

                <div className={"stack"}>
                    <div className={"front"}>
                        <h6 className={"name-stack"}>HTML/CSS</h6>
                        <h6 className={"name-stack"}>JAVASCRIPT</h6>
                        <h6 className={"name-stack"}>REACTJS</h6>
                        <h6 className={"name-stack"}>SASS</h6>
                    </div>
                    <div className={"back"}>
                        <h6 className={"name-stack"}>NODEJS</h6>
                        <h6 className={"name-stack"}>PHP</h6>
                        <h6 className={"name-stack"}>SQL/MONGO DB</h6>
                        <h6 className={"name-stack"}>LARAVEL/SYMFONY</h6>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Stack;