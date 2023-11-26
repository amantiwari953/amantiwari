import React,{useState} from 'react';


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = ()=>{
        console.log("uppercase was clicked"+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("enter your text here")
  return (
    <>
        <div className="container">
        <div className="form-floating">
        <h1>{props.heading}</h1>
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" rows="8" value={text} onChange={handleOnChange}></textarea>
</div> <br />
<button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to LowerCase</button>

        </div>
        <div className="container">
            <h1>your text summary</h1>
            <p>{text.split(" ").length-1} words and {text.length} character</p>
            <p>{0.008*(text.split(" ").length)} minutes reading</p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
}
