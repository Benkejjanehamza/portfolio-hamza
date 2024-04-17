import React, { useState, useEffect } from 'react';
import cybergirl from "../../src/assets/img/bedGirl.png";

function FirstPage() {
    const fullText = "I’m a creative\nweb developer.";
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index]);
                setIndex(index + 1);
            }, 70);
        }
    }, [index, text]);

    return (
        <>
            <div className={"text-page"}>
                <h6 className={"hello"}>Hello people!</h6>
                <h1 className={"main-text"}>
                    {text.split('\n').map((item, i) => (
                        <React.Fragment key={i}>
                            {item}<br/>
                        </React.Fragment>
                    ))}
                </h1>
            </div>
            <img className={"cybergirl"} src={cybergirl} alt="Cyber Girl"/>
        </>
    );
}

export default FirstPage;
