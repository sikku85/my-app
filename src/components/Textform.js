import React, { useState } from "react";

export default function Textform(props) {

  //    upper case function
  const handleupclickuper = () => {
    let newtext = text;
    setText(newtext.toUpperCase());
    props.showalert("Converted to Upper-Case","success");
    setTimeout(() => {
        props.setalert(null);
        
    }, 1500);
    
  };
  // upper function end here


  

  //   lower case function
  const handleupclicklower = () => {
    let newtext=text;

    setText(newtext.toLowerCase());
    props.showalert("Converted to Lower-Case","success");
    setTimeout(() => {
        props.setalert(null);
        
    }, 1500);

  };
//   copy text box

    const handlercopyText=()=>{
        var text=document.getElementById('box');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Yur Text-coped","success");
        setTimeout(() => {
            props.setalert(null);
            
        }, 1500);

  };

  //   rest text box

  const handleupresetclicklower=()=>{
    setText("");
    props.showalert("Text-Box empty","success");
    setTimeout(() => {
        props.setalert(null);
        
    }, 1500);

  };




  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState('');

  return (
    <>
    <div className="mb-3 my-3 container" style={{color:props.mod==='dark'?'white':'black'}} >
      <label for="exampleFormControlTextarea1" className="form-label">
        Text_area
      </label>
      <textarea
        className="form-control"  style={{backgroundColor:props.mod==='dark'?'#042743':'white',color:props.mod==='dark'?'white':'black'}}
        value={text}
        onChange={handleonchange}
        id="box"
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-3" onClick={handleupclickuper}>
        convert to upperCase
      </button>

      <button
        className="btn btn-primary my-3 mx-4"
        onClick={handleupclicklower}
      >
        convert to lowercase
      </button>

      <button
        className="btn btn-primary my-3 mx-4"
        onClick={handleupresetclicklower}
      >
        reset
      </button>
      <button
        className="btn btn-primary my-3 mx-4"
        onClick={handlercopyText}
      >
        copy
      </button>

    </div>

    <div className="container" style={{color:props.mod==='dark'?'white':'black'}}>
        <h1 >Your Text summary:</h1>
        <p>Total characters: <span>{text.length}</span></p>
        <p>Total words: <span>{text.split(" ").length}</span></p>
        <p>Total Time it will Take To read : <span>{0.008*text.split(" ").length}</span> Minutes</p>
        
    </div>

    </>
  );
}
