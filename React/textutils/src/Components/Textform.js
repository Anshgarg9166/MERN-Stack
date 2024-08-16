import React,{useState} from 'react'

export default function Textform(props) {

    const handleUpClick = (props) => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = (props) => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = (props) => {
        console.log("Lowercase was clicked" + text);
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event)=>{
        console.log("on Change");
        setText(event.target.value)
        
    }

    const [text,setText] = useState('');
    // text = "new text"; Wrong way to change
    // setText("new text"); correct way to change



  return (
    <>
    <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick = {handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick = {handleClearClick}>Click to Clear</button>

    </div>
    
    <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    </>
  )
}
