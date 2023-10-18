import React from 'react'
// import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btnText, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }


    return (
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                            TextUtiles gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                    <h2 className="accordion-header" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                            TextUtils  provides functions to convert the text to uppercase, lowercase, capitalize the first letter of each word, and remove extra spaces. These text utility functions can be useful in various scenarios, such as when you need to format text for display or when you need to process user input for a search function.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                    <h2 className="accordion-header" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        {/* <div className="accordion-body" style={myStyle}> */}
                        <div className="accordion-body" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#0e0f0f' : 'white' }}>
                            This word counter software worls in anyweb browsers such as Chrome, Firefox, Internet explorer, Safari, Opera.It suits to count charactersin facebook, blog, books, excel document, pdf document, essays etc.</div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
                <button type="button" className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}
