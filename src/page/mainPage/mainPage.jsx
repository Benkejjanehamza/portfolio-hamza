import NavBar from "../../composant/navBar.jsx";
import FisrtPage from "../../composant/fisrtPage.jsx";
import {useRef} from "react";
import line from "../../assets/img/line.png";
import WhoAmI from "../../composant/whoAmI.jsx";
import Assemblage from "../../composant/project/assemblage.jsx";
import AssemblageGallery from "../../composant/inspiration/assemblage.jsx";

function MainPage(){
    const Project = useRef(null);
    const Bio = useRef(null)
    const Inspiration = useRef(null)



    return(
        <>
            <div className={"main-page"}>
                <NavBar sectionLists={ {Project, Bio, Inspiration} } />
                <div className={"content"}>
                    <section className={"section-1"}>
                        <FisrtPage/>
                    </section>

                    <div className={"line-container"}>
                        <img className={"line"} src={line}/>
                    </div>

                    <section className={"section-2"} ref={Bio}>
                        <WhoAmI/>
                    </section>
                    <div className={"line-container"}>
                        <img className={"line"} src={line}/>
                    </div>
                    <section className={"section-2"}  ref={Project}>
                        <Assemblage/>
                    </section>
                    <div className={"line-container"}>
                        <img className={"line"} src={line}/>
                    </div>

                    <section className={"section-2"}id={"toto"} ref={Inspiration}>
                        <AssemblageGallery/>
                    </section>
                </div>
            </div>
        </>
    )
}

export default MainPage;