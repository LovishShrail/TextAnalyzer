import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  
  }

  const handleLoClick = () =>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerercase","success");

  
  }

  const handleClearClick = () =>{
    console.log("Text cleared" + text);
    let newText = '';
    setText(newText);
  
  }
  const handleOnChange = (event) =>{
    console.log("On change");
    setText(event.target.value);
  }
  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success"); 
      
  }

  const handleExtraSpaces =() =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success"); 

  }
  const[text , setText] = useState('Enert text here');
  return (
    <>
      <div className="constainer" style ={{color:props.mode==='dark'?'white':'black'}}>
          <h2 >{props.heading}</h2> 
          <div className="mb-4 mx- -1">
          <label for="myBox" className="form-label"></label>
          <textarea className="form-control" value={text} onChange={handleOnChange} style ={{backgroundColor:props.mode==='dark'?'rgb(17 19 20)':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleLoClick}>Convert to lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleClearClick}>Clear text</button>
          <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary  mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra-space</button>
          
          
      </div>
      <div className="className my-3" style ={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element) =>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").filter((element) =>{return element.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
      </div>
    </>
  )
}   

