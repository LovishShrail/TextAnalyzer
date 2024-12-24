import './App.css';
import { useCallback, useState } from 'react';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000); 
  }
  

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = 'rgb(17 19 20)'; 
      showAlert("Dark mode has been enabled","success");
      // document.title = "Textutils - Darkmode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      showAlert("Light mode has been enabled","success");
      // document.title = "Textutils - Lightmode";
    }
  }
  return (
  <>  
    <Router> 
    <Navbar title="TextUtils" aboutText="About TextUtlis"  mode = {mode} toggleMode={toggleMode}/>
    <Alert alert= {alert}/>
    
    <div className='container my-3'>
     
        <Switch>
          <Route path ="/about">
            <About mode = {mode} />
          </Route>
          <Route exact path ="/">
            <Textform heading="Enter your text to analyze below" mode = {mode} showAlert = {showAlert}/>
          </Route>
        </Switch>  
        
    {/* <About/> */}
    </div>
    </Router>
    
  </>
  );
}

export default App;
