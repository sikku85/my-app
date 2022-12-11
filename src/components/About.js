import React, { useState } from "react";

export default function About() {
    const [buttonText, setbuttonText] = useState("Enable Dark Mod")
    const [mystyle, setmystyle] = useState(
        {
            color:'black',
            backgroundColor:'white',

        }
    )
   const toggledarkmod=()=>{
        if(mystyle.color==="white"){
            setmystyle({
                color:'black',
                backgroundColor:'white',
                
            })
            setbuttonText('Enable Dark Mod')
        }else{
            setmystyle({
                color:'white',
                backgroundColor:'black',
            }) 
            setbuttonText('Enable Light Mod')
        }
          
    }
   

  return (
    <>
    <div className="mb-3 my-3 container">
        <h2 style={mystyle}>About Us :</h2>
        <div style={mystyle}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit maxime id dignissimos.</h1>
        </div>
        <button className="my-3" onClick={toggledarkmod}>{buttonText}</button>
    </div>
    
    </>
  );
}
