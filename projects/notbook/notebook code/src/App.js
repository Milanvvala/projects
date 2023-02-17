import './App.css';
import About from './comp/about';
import Home from './comp/home';
import Navbar from './comp/nav';
import { Route, Routes } from "react-router-dom"
import NoteState from './context/notes/noteState';
import Alert from './comp/alert';
import Login from './comp/login';
import SignUp from './comp/signup';
import { useState } from 'react';

function App() {
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
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert}></Home>}/>
            <Route path="/home" element={<Home showAlert={showAlert}/>} />
            <Route path="/login" element={<Login showAlert={showAlert}/>} />
            <Route path="/signup" element={<SignUp showAlert={showAlert}/>} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
