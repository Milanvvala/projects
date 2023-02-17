import React from 'react'
import { Link,  useLocation, useNavigate } from "react-router-dom"

export default function Navbar() {
  let location = useLocation();let navigate = useNavigate();
  const hdLO = () => { localStorage.removeItem('token');navigate("/login");console.log(localStorage.getItem('token'));}
  // useEffect(() => {console.log(location.pathname)}, [location]);

  return ( <><nav className="navbar navbar-expand-lg bg-light"><div className="container-fluid">
          <Link className="navbar-brand" to="/">Notebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"><li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home</Link>
              </li><li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link></li>
            </ul>
            {!localStorage.getItem('token') ?
              <form className="d-flex" role="search">
                <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUP</Link>
              </form> :
              <button onClick={hdLO} className="btn btn-primary mx-1">Logout</button>}
          </div></div></nav></>)
}