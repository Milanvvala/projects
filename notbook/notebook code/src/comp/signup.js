import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = (props) => {
  const [cred, setcred] = useState({ name: "", email: "", psw: "" })
  let navigate = useNavigate();
  const hdSub = async (e) => {
    const host = "http://localhost:1234"
    const url = `${host}/api/auth/createuser`;
    const { name, email, psw } = cred;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, psw })
    });
    const json = await response.json()
    // console.log(json)
    if (json.success) {
      //redirect and save the auth token to local storage
      localStorage.setItem('token', json.token)
      props.showAlert("Acount created", "success")
      navigate("/")
    } else { props.showAlert("invelid Detailes", "danger") }
  }
  const onCh = (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value })
  }
  return (
    <div className='container'>
      <form onSubmit={hdSub}><div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" value={cred.name} name='name' className="form-control" id="name" aria-describedby="emailHelp" onChange={onCh} />
      </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input required minLength={5} type="email" value={cred.email} name='email' className="form-control" id="email" aria-describedby="emailHelp" onChange={onCh} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="psw" value={cred.psw} className="form-label">Password</label>
          <input required minLength={5} type="password" name="psw" className="form-control" id="psw" onChange={onCh} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form></div>
  )
}

export default SignUp