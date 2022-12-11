import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
import React from "react";
// import {
//   BrowserRouter,
//   Routes, // instead of "Switch"
//   Route,
// } from "react-router-dom";

import { useState } from "react";

function App() {
 
  const [mod, setmod] = useState('light');
  const [mod_text, setmod_text] = useState('Enable Dark Mod');
  const [alert, setalert] = useState(null)
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  }
  const tooglemod=()=>{
    if(mod==='light'){
      setmod('dark');
      setmod_text('Disable Dark Mod');
      document.body.style.backgroundColor='#042743';
      showalert("Dark mod enabled","success");
      setTimeout(() => {
      setalert(null);
      }, 1500);
      
    }else{
      setmod('light');
      setmod_text('Enable Dark Mod');
      document.body.style.backgroundColor='white';
      showalert("Light mod enabled","success");
      setTimeout(() => {
        setalert(null);
        }, 1500);

      

    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar title="Text_utils" mod={mod} tooglemod={tooglemod} mod_text={mod_text} />
      <Alert alert={alert}/>
      <Textform showalert={showalert} setalert={setalert} mod={mod} />
        
      {/* <Routes>
        <Route path="/" element={<Textform showalert={showalert} setalert={setalert} mod={mod} />} />
        <Route path="/about" element={  <About />} />
      </Routes> */}
   




      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
