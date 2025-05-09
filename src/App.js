// import logo from './logo.svg';
import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import Alert from './componets/Alert';
import React, { useState } from 'react';



function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
  const showALert= (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);

  }
  const togglemode = () => {
    if (mode === 'light'){


      setMode('dark');
      document.body.style.backgroundColor = '#212f3d';
       document.body.style.color = 'white';
       setAlert({
        msg: "Dark mode has been enabled",
        type: "success"
      })
     
    }
    if (mode === 'dark'){ {
       setMode('light');
      document.body.style.backgroundColor = 'white';
         document.body.style.color = '#212f3d';
          setAlert({
        msg: "Light mode has been enabled",
        type: "success"
      })
       
      
    }
  }
    }
    let tc;
    if (mode === 'light') {
      tc = 'white';
    } else {
      tc = '#566573';
    }
    
    
  return (
  
    <>
   
   
<Navbar  title="Home" aboutus="Get Start" mode={mode} togglemode={togglemode}/>
 <Alert alert={alert}/> 

<TextForm heading=" To Capitalize"  coli={tc} showALert={showALert}/>

{/* <About coli={tc}/> */}




    
    
    
    
    
    
    
    </>
   


  );
}

export default App;



