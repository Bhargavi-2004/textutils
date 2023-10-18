// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = (cls) => {
    console.log(cls);
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#041e44';
      // document.title = 'TextUtils - Dark Mode';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // document.title = 'TextUtils - Light Mode';
      showAlert("Light mode has been enabled", "success");
    }

    // Don't Do this : 

    // setInterval(() => {
    //   document.title = 'TextUtils is amzing';
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'TextUtils is in the mode you have choosen';
    // }, 3000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Text" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar title="TextUtils"/> */}
        {/* <Navbar /> */}
        <div className="container my-3">
          <Routes>
            {/* Why do we use "exact" word before "path"
             /users --> Componenet 1
             /users/home --> Componenet 2 */}
            <Route exact path='/about' element={<About mode={mode} />} />
            <Route exact path='/' element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter , Character Counter, Remove Extra Spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
