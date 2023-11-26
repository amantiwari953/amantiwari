import './App.css';
import React,{useState} from 'react';

import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  let [mode, setMode] = useState("light");
  let [alert, setAlert] = useState(null);
  let showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type}
    )
    setTimeout(()=>{
     setAlert(null)
    },1500)
  }
  let toggleMode= ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor ='#343a40';
      document.body.style.color ="white";
      showAlert("dark mode is enabled","success")
    }
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor ="white";
      document.body.style.color ="black";
      showAlert("light mode is enabled","success")
    }

  }
  return (
   <>
 <NavBar title="textutils" nav1="Home" nav2="About us" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container"><TextForm heading="enter the text to analyze" showAlert={showAlert}/></div>
   </>
  );
}

export default App;
