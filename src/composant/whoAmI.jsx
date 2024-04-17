import hamza from "../assets/img/hamza.jpg";

function WhoAmI(){

    return(
        <>
            <div className={"title-section"}>
                <h1 className={"who"}>WHO I AM</h1>
            </div>



            <div className={"about-container"}>
                <div className={"img-moi"}>
                    <img className={"moi"} src={hamza}/>
                </div>

                <div>


                    <div className="text-about-me">
                        <h4>Hamza Benkejjane</h4>

                        <p className={"content-text"}>
                            Hi, my name is Manoj Karki, I am a designer working in visual communication, with a
                            focus on interaction design & art direction. I love to create
                            engaging, creative, and interactive app. My aim is to
                            visualize your ideas through my development skills, by
                            adding motion, I bring them life and make an impressive product.
                            I Love Design, Code and Story.
                            Design is not a job, design is a mindset. Specially structured and logical thinking.
                        </p>

                        <h6 className={"read-more"}>Read More</h6>

                    </div>

                </div>

            </div>
        </>
    )
}

export default WhoAmI;