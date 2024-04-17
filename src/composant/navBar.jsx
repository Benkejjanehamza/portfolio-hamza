
import "../App.css";

function NavBar({ sectionLists }){

    const HandleScrollInto = (name) => {
        sectionLists[name].current.scrollIntoView({ behavior: 'smooth' })
    }

    return(
        <>
            <div className={"main-container"}>
            <div className={"nav-container"}>
                <div className={"name"}>
                    <h1 className={"hb"}>HB</h1>
                    <h4 className={"web"}>Web developer<br/>Fullstack</h4>
                </div>

                <h2 className={"hamza"} onClick={() => HandleScrollInto('Bio')}>Hamza Benkejjane</h2>

                <div className={"ul-list"}>
                    <ul>
                        <li>HOME</li>
                        <li onClick={() => HandleScrollInto('Project')} >PROJECT</li>
                        <li onClick={() => HandleScrollInto('Inspiration')} >INSPIRATIONS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default NavBar;