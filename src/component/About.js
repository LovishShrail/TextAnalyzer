import React, { useState } from 'react';

export default function About(props) {
    console.log(props.mode);

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btntext, setBtnText] = useState("Enable Dark Mode");

    const togglestyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            });
            setBtnText("Enable Light Mode");
        } else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtnText("Enable Dark Mode");
        }
    };

    return (
        <div className="container" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className="accordion-header" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>This feature allows users to analyze their text for readability, grammar, and style suggestions. By providing insights into sentence structure, word choice, and overall clarity, our tool helps users enhance their writing skills and produce more effective communication.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className="accordion-header" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>Our service is completely free to use, with no hidden fees or subscriptions. We believe in making powerful writing tools accessible to everyone, allowing users to take advantage of all features without any financial barriers. Enjoy unlimited access to our platform and improve your writing at your own pace.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h2 className="accordion-header" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(17 19 20)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>Our application is designed to be compatible with all major browsers, including Chrome, Firefox, Safari, and Edge. This ensures that users can access our services seamlessly, regardless of their preferred browser. We prioritize a consistent and smooth user experience across different platforms.</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2">
                <button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}
