import './App.css';
import Navbar from './components/Navbar';
import FormText from './components/FormText';
import About from './components/About';
import React, {useState} from 'react' ; 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  
} from "react-router-dom";

function App() {
  const [darkmode,setdarkmode]=useState('light');
  const [text2,settext2]=useState('light');
  const [alert,setalert]=useState({
    msg:' ',type:' '
  });
  function showalert(message,type)
  {  
    setalert({
      msg:message,
      type:type
    });
  }
  function toggle() {
    if (darkmode === 'dark') {
      setdarkmode('light');
      settext2('dark');
      document.body.style.backgroundColor = 'dark';
      showalert('Project is working','success');
      document.title='App Dark mode';
    }
    else {
      setdarkmode('dark');
      settext2('light');
      setalert('danger');
      document.body.style.backgroundColor ='light';
      showalert('Project is not working','danger');
      document.title='App light mode';
    }
  }
  
  return (
    
    <div className="c1" style={{backgroundColor:darkmode==='light'?'dark':'light'}}>
    <Router>
    <Navbar title="Home" fg="Text Editor" mode={darkmode} togglemode={toggle} textmode={text2} alert1={alert} ></Navbar>
    
    
    <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/textform" element= <div className="conatiner">
     <FormText heading="Write text here"  mode={darkmode} alert1={alert} show={showalert}></FormText> </div>></Route>
       
    </Routes>
        </Router>
        </div>
        
         



  )
  }

     
  


export default App;
