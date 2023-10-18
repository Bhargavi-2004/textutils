import React, { useState } from 'react'
import copy from 'copy-to-clipboard';
// import { SketchPicker } from 'react-color';

export default function Textform(props) {

    const handleOnChange = (event) => {

        console.log("Handle On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        console.log(props.showAlert);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const CopyToClipboard = () => {
        // console.log("Copy to clipboard " + text);
        copy(text);
        alert(`You have copied "${text}"`);
        props.showAlert("Copied to Clipboard!", "success");

    }



    const handleLowerClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLocaleLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!", "success");

    }

    const handleExtraSpace = () => {
        console.log("This is in working");
        // let newTexts = text.trim();
        // setText(newTexts)

        // it can remove the part which we have written in "split" and replace it with the part which we have written in "join"
        // let newTexts = text.split("  ").filter(Boolean);
        // setText(newTexts.join(" "))

        // Another Way :
        let newTexts = text.split(/ +/).join(" ");
        setText(newTexts)
        props.showAlert("Extra spaces removed!", "success");
    }


    const handleClearText = () => {
        let Text = text;
        setText("")
        props.showAlert("Text Cleared!", "success");
    }

    const [color, setColor] = useState("#007bff");

    const handleColor = (newColor) => {
        setColor(newColor.hex);
        // document.documentElement.style.setProperty('--main-color', newColor.hex);
        // document.querySelector("body").style.backgroundColor = newColor.hex;
    };
    // text = "new text"; Wrong way
    // setText("New state"); Right Way

    return (
        <>
            {/* <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: color, color: '#fff' }}> */}
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='mb-4'>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? '#13466e' : 'white' }} value={text} onChange={handleOnChange} rows="8"></textarea>
                    {/* <textarea className="form-control" id="myBox" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleOnChange} rows="8"></textarea> */}
                </div>
                {/* <button className='btn btn-primary mx-1' onClick={handleUpClick} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: color, color: '#fff' }} >Convert to uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLowerClick} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: color, color: '#fff' }} >Convert to lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClearText} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: color, color: '#fff' }} >Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={CopyToClipboard} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: color, color: '#fff' }} >Copy Text</button>
                <button className='btn btn-primary mx-1' onClick={handleExtraSpace} style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: color, color: '#fff' }} >Avoid Extra Space</button> */}
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Convert to uppercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLowerClick} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Convert to lowercase</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearText} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Clear Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={CopyToClipboard} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Copy Text</button>
                <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >Avoid Extra Space</button>
            </div>
            {/* <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: color, color: '#fff' }}> */}
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
            {/* <div>
                <SketchPicker color={color} onChange={handleColor} />
                <button className='btn btn-primary mx-1' style={{ backgroundColor: color, color: '#fff' }} >Apply Color</button>
            </div> */}

        </>
    )
}


// Another Way:

// const handleCopy = () => {
//     var text = document.getElementById("myBox");
//     text.select();
//     navigator.clipboard.writeText(text.value);
// }