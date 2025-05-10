import './App.css';
import About from './componets/About';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
import Alert from './componets/Alert';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      document.title = "TextUtils - Dark Mode"
    }
    if (mode === 'dark'){ {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#212f3d';
      setAlert({
        msg: "Light mode has been enabled",
        type: "success"
      })
      document.title = "TextUtils - Light Mode"
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
    <Router>
      <Navbar title="Home" aboutus="Text Section" mode={mode} togglemode={togglemode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/text" element={
          <TextForm heading="To Capitalize" coli={tc} showALert={showALert}/>
        }/>
        <Route path="/about" element={<About coli={tc}/>}/>
      </Routes>
    </Router>
  );
}

export default App;