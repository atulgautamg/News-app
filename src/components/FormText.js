import React, {useState} from 'react'

export default function FormText(props) {

   const [text,SetText]=useState(' ');    
     function clickupon()
     {
        console.log("button is running");
        SetText("this is start");
        SetText(text.toUpperCase());
     }                                                 
     
     function clickupon1()
     {
        console.log("button is running2");
        
        SetText(text.toLowerCase());
     }
     function changeupon(e)
     {
        console.log("this is running1")
        SetText(e.target.value);
     }
     function removeupon()
     {
      
      let txt2=text.split(/[  ]+/);
      SetText(txt2.join(" "));
     }
     
  
  
  function copytext()
  {
     navigator.clipboard.writeText(text);
     props.show("message is copied ","success");  
     setTimeout(() => {
      props.show(" "," ");
     }, 2000); 
  }
  
    return (
        <>
        
    <div  className="container"  style={{backgroundColor:props.mode==='light'?'dark':'light'}}>
    
      <h1 id='head'>{props.heading}   </h1>
    <div className="mb-3" >
  <label htmlFor="box1" className="form-label"></label>
  <textarea className="form-control"  value={text}  onChange={changeupon} id="box1" rows="3" ></textarea>
     </div>
     <button disabled={text.length===0} className='btn btn-primary mx-3 my-3' onClick={clickupon}> convert to uppercase</button>
     
     <button className='btn btn-primary mx-3 my-3' onClick={clickupon1}> convert to lowercase</button>
      <button className='btn btn-primary mx-3 my-3' onClick={removeupon} > Remove extra spaces </button>
      <button className='btn btn-primary mx-3 my-3' onClick={copytext}  > Copy Text </button>
    </div>
    <div className="container">
        <h1 className='text1sum'>Text summary</h1>
        <p> Total {text.length} characters  and {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words</p>
    </div>
    </>
  )
}
