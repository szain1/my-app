import React,{use, useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const handleClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
        props.showALert("Converted to uppercase", "success")
         
    }
    const handlelowClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
        props.showALert("Converted to lowercase", "success")
       
    }

    const handleonchange = (event)=>{
        setText(event.target.value)
    }
    const[text, setText] =useState("Enter your text");






  return (
<>
    <div className="container my-3 mt-5" 
    
   >
    <h1 className='mt-5'>{props.heading}</h1>
    <div className="mb-3">
      <textarea  style={{backgroundColor: props.coli , color: props.coli === "white" ? "black":"white" }} className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleClick}>Convert to the uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to thelowercase</button>
    
    <button className="btn btn-primary mx-2" onClick={()=>{setText("empaty")}}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={()=>{navigator.clipboard.writeText(text); alert("text copied");props.showALert("text copied", "success")} }>Copy Text</button>
    {/* <button className="btn btn-primary mx-2" onClick={()=>{alert("text copied")}}>past</button>   */}
    
  </div>
<div className="container my-3">
    <h2>your text summery</h2>
    <p> {text.length} Character  , {text.split(" ").filter((element)=>{return element.length!=0}).length} Words</p>
    <p> {neText} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0? text: "Enter something to preview it here"}</p>
</div>



  </>


  
  )
}




let word=text.split(" ").length;

let neText;
if(word =>60){
 let neText= word*0.008; 
 return neText;
} 
else{
  let neText = 1; 
  return neText;
}

