import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick= () => {
        // console.log("Uppercase was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText)
    }
    const handleLowerClick= () => {
        // console.log("Uppercase was clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText)
    }
    const handleClearClick= () => {
        // console.log("Uppercase was clicked"+ text);
        let newText= '';
        setText(newText)
    }
    const handleOnChange= (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const[text, setText] = useState('');
    return (
        <>
        <div className="container">
<h2>{props.heading}</h2>

<div className="mb-3">

<textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>        
        </div>
        <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}