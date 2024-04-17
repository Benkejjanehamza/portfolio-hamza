import Stack from "./stack.jsx";
import CardProject from "./cardProject.jsx";

function Assemblage(){

    return(
        <>
            <div className={"title-section"}>
                <h1 className={"who"}>MY PROJECTS</h1>
            </div>
            <div className={"project-container"}>
                <Stack/>
                <CardProject/>
            </div>
        </>

    )
}

export default Assemblage;